/*
 * A component that holds the inventory of products loaded from Stripe
 * and makes it available for the whole site.
 */
import React, { createContext, useContext } from "react";
import { graphql, useStaticQuery } from "gatsby"
import Config from '../config.json';
//import ProductPage from "../pages/product/sample";

const Context = createContext();

export const useInventory = () => {
  // When compiling, context can be empty, which means that components
  // trying to destruct to retrieve an "inventory" field will fail.
  const x = useContext(Context);
  if (x) {
    return x;
  } else {
    return {inventory: {}}
  }
}

/*
 * LOAD PRODUCTS FROM STRIPE
 *
 * Load all the products of a certain type (?) from Stripe.
 * We only have one type at the moment, and I don't know if/how 
 * Stripe would support mode, but imagine we had ceramics and
 * accessories, for example, that we wanted on different pages
 */
const useStripeInventory = () => {

  const { prices } = useStaticQuery(graphql`
    query ProductPrices {
      prices: allStripePrice(
        filter: { 
          # Filter out inactive prices
          active: { eq: true },
  
          # Filter out archived products
          product: { active: { eq: true } }
        }
        sort: { unit_amount: ASC }
      ) {
        edges {
          node {
            id
            active
            currency
            unit_amount
            product {
              id
              name
              active
              description
              localFiles { # Access downloaded image files
                childImageSharp {
                  gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
                }
              }
              images
              metadata { 
                category 
                subcategory
              }
            }
          }
        }
      }
    }
  `)

  // Assign the first category in config.json to any products that are missing a category.
  const headerLinksCategories = Config.headerLinks.find(item => item.menuLabel === "Shop").category;
  const defaultCategory = headerLinksCategories[0].stripeCategory;
  const defaultSubCategory = headerLinksCategories[0].submenu[0].stripeSubcategory;

  // Wrapping this in a function, because we get a warning if I put it in the loop below.
  function findHeaderLinksCategory(stripeCategory) {
    return headerLinksCategories.find(item => item.stripeCategory === stripeCategory)
  }

  // Group prices by product
  const products = {}
  for (const { node: price } of prices.edges) {
    var product = price.product
    if (!products[product.id]) {
      products[product.id] = product
      products[product.id].prices = []
    }
    products[product.id].prices.push(price)

    // add a default price (the first active price)
    // and a default image.
    product.default_price = product.prices.filter((px) => (px.active))[0].unit_amount;
    product.default_price_id = product.prices.filter((px) => (px.active))[0].id;
    product.default_image = product.images[0];

    // Make sure all products have a default category and subcategory if it is
    // missing in Stripe.
    if (!product.metadata || !product.metadata.category)
    {
      product.metadata = {category: defaultCategory, subcategory: defaultSubCategory}
    } else if (!product.metadata.subcategory) {
      // Try to get the category from the header links data
      let headerLinksCategory = findHeaderLinksCategory(product.metadata.category);

      if (headerLinksCategory) {
        // If we found it, then set the product subcategory to the first subcategory.
        product.metadata.subcategory = headerLinksCategory.submenu[0].stripeSubcategory;
      } else {
        // If not, (i.e. the Stripe db listed a category that doesn't exist), then just
        // fallback to default category and subcategory.
        product.metadata = {category: defaultCategory, subcategory: defaultSubCategory}
      }
    }
  }

  return products;
}


const InventoryProvider = ({children}) => {
  const exposed = {
    inventory: useStripeInventory()
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
}

export default InventoryProvider;