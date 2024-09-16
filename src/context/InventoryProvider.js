/*
 * A component that holds the inventory of products loaded from Stripe
 * and makes it available for the whole site.
 */
import React, { createContext, useContext } from "react";
import { graphql, useStaticQuery } from "gatsby"

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
        filter: { active: { eq: true } }
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
              description
              images
            }
          }
        }
      }
    }
  `)

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