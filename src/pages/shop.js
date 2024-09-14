import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby"

import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import Button from '../components/Button';
import Config from '../config.json';

const ShopPage = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  /*
   * LOAD PRODUCTS FROM STRIPE
   *
   * Probably should be in its own file.
   * Load all the prodcuts of a certain type (?) from Stripe.
   * We only have one type at the moment, and I don't know if/how 
   * Stripe would support mode, but imagine we had ceramics and
   * accessories, for example, that we wanted on different pages
   */
  /*
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
    const product = price.product
    if (!products[product.id]) {
      products[product.id] = product
      products[product.id].prices = []
    }
    products[product.id].prices.push(price)
  }

  console.log(Object.keys(products).map((key) => (products[key].prices)))
  const data = Object.values(products).map((product) => (
    {
      id: product.id,
      price: product.prices.filter((px) => (px.active))[0].unit_amount,
      price_id: product.prices.filter((px) => (px.active))[0].id,
      alt: product.name,
      name: product.name,
      image: product.images.length > 0 ? product.images[0] : "/products/pdp1.jpeg",
      meta: product.description,
      //originalPrice: 100,
    }

       /* <ProductCard key={products[key].id} product={products[key]} /> *_/
  ))

  console.log("DATA", data)
*/
  /*
   * END LOAD PRODUCTS FROM STRIPE
   */


  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/', label: 'Woman' },
                { label: 'Sweaters' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Woman's Sweaters`}
          subtitle={
            'Look to our women’s sweaters for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>476 items</span>
            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div
                className={`${styles.iconContainer} ${styles.sortContainer}`}
              >
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div>
          </div>
          <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          />
          <div className={styles.chipsContainer}>
            <Chip name={'XS'} />
            <Chip name={'S'} />
          </div>
          <div className={styles.productContainer}>
            <span className={styles.mobileItemCount}>476 items</span>
            <ProductCardGrid></ProductCardGrid>
          </div>
          <div className={styles.loadMoreContainer}>
            <span>6 of 456</span>
            <Button fullWidth level={'secondary'}>
              LOAD MORE
            </Button>
          </div>
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  );
};

export default ShopPage;
