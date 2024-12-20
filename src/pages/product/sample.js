import React, { useState, useContext } from 'react';
import { useLocation } from '@reach/router';
import { useShoppingCart } from 'use-shopping-cart';
import { useInventory } from '../../context/InventoryProvider';
import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import SizeList from '../../components/SizeList';
import Split from '../../components/Split';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';

import { fetchProductImages, generateMockProductData } from '../../helpers/mock';
import Icon from '../../components/Icons/Icon';
import ProductCardGrid from '../../components/ProductCardGrid';
import { navigate } from 'gatsby';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';
import { useCrumbs, queryStringToCrumbs } from '../../context/BreadcrumbProvider';

const ProductPage = (props) => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const { inventory } = useInventory();
  const { addItem, cartDetails, incrementItem } = useShoppingCart();
  const showNotification = ctxAddItemNotification.showNotification;

  //const sampleProduct = generateMockProductData(1, 'sample')[0];
  //const [qty, setQty] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  //const [activeSwatch, setActiveSwatch] = useState(
  //  sampleProduct.colorOptions[0]
  //);
  //const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);
  const suggestions = generateMockProductData(4, 'woman');

  // Get the current location object
  const location = useLocation();

  // Create an instance of URLSearchParams with the query string
  const queryParams = new URLSearchParams(location.search);

  const productId = queryParams.get("productId");
  const crumbs = queryStringToCrumbs(location.search);

  if (crumbs.length > 1) {
    crumbs[crumbs.length - 1].link = "/shop";
    crumbs.push({label: inventory[productId].name});
  }

  var productImages = fetchProductImages(productId ? productId : "default");

  // If there were no images, substitute the default image.
  if (!productImages) {
    productImages = fetchProductImages("default");
  }

  const handleAddToCart = (product_id) => {
    const item = Object.values(cartDetails).find((i) => i.product_id === product_id);

    if (item) 
    {
      //incrementItem(item.id);
      showNotification({productId: product_id, alreadyInCart: true})
    }
    else
    {
      addItem({product_id: product_id, currency: "GBP"});
    }
    showNotification({productId: product_id, alreadyInCart: true});
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs crumbs={crumbs} />
          <div className={styles.content}>
            <div className={styles.gallery}>
              <Gallery images={productImages.gallery} />
            </div>
            <div className={styles.details}>
              <h1>{inventory[productId]?.name ?? "Item"}</h1>

              <div className={styles.priceContainer}>
                <CurrencyFormatter appendZero amount={inventory[productId]?.default_price/100 ?? "-1"} />
              </div>

              {/*
              <div>
                <SwatchList
                  swatchList={sampleProduct.colorOptions}
                  activeSwatch={activeSwatch}
                  setActiveSwatch={setActiveSwatch}
                />
              </div>

              <div className={styles.sizeContainer}>
                <SizeList
                  sizeList={sampleProduct.sizeOptions}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
              </div>
              */}

              {/*
              <div className={styles.quantityContainer}>
                <span>Quantity</span>
                <AdjustItem qty={qty} setQty={setQty} />
              </div>
              */}

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => handleAddToCart(productId)}
                    fullWidth
                    level={'primary'}
                  >
                    Add to Cart
                  </Button>
                </div>
                {/*
                <div
                  className={styles.wishlistActionContainer}
                  role={'presentation'}
                  onClick={() => setIsWishlist(!isWishlist)}
                >
                  <Icon symbol={'heart'}></Icon>
                  <div
                    className={`${styles.heartFillContainer} ${
                      isWishlist === true ? styles.show : styles.hide
                    }`}
                  >
                    <Icon symbol={'heartFill'}></Icon>
                  </div>
                </div>
                */}
              </div>

              <div className={styles.description}>
                <p>{inventory[productId]?.description ?? "Description coming soon"}</p>
              </div>

              {/*
              <div className={styles.informationContainer}>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'composition & care'}
                >
                  <p className={styles.information}>
                    sampleProduct.description
                  </p>
                </Accordion>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'delivery & returns'}
                >
                  <p className={styles.information}>
                    sampleProduct.description
                  </p>
                </Accordion>
                <Accordion type={'plus'} customStyle={styles} title={'help'}>
                  <p className={styles.information}>
                    sampleProduct.description
                  </p>
                </Accordion>
              </div>
              */}
            </div>
          </div>
          {/*
          <div className={styles.suggestionContainer}>
            <h2>You may also like</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={400}
              columns={4}
              data={suggestions}
            />
          </div> */}
        </Container>

      </div>
    </Layout>
  );
};

export default ProductPage;
