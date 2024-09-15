import React, { useState, useContext } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useInventory } from '../../context/InventoryProvider';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import SizeList from '../SizeList';
import SwatchList from '../SwatchList';

import { generateMockProductData } from '../../helpers/mock';
import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import * as styles from './QuickView.module.css';
import { toOptimizedImage } from '../../helpers/general';

const QuickView = (props) => {
  const { product_id, close, buttonTitle = 'Add to Bag' } = props;
  const { inventory } = useInventory();

  const colorOptions = [
    {"color": "#000000", "title": "Anthracite Melange"},
    {"color": "#4D34AE", "title": "Pale Purple"},
    {"color": "#488266", "title": "Green Moss"}
  ]

  const sizeOptions =["xs", "s", "m", "l", "xl"];

  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const [activeSwatch, setActiveSwatch] = useState(
    colorOptions[0]
  );
  const [activeSize, setActiveSize] = useState(sizeOptions[0]);

  const { addItem, cartDetails, incrementItem } = useShoppingCart();
  const handleAddToBag = () => {
    const item = Object.values(cartDetails).find((i) => i.product_id == product_id);

    console.log("ADDTOCART", item)
  
    if (item) {
      incrementItem(item.id);
    } else {
      addItem({product_id: product_id, currency: "GBP"});
    }
    close();
    showNotification();
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Select Options</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
          <span className={styles.productName}>{product_id ? inventory[product_id].name : "NO PRODUCT"}</span>
          <div className={styles.price}>
            <CurrencyFormatter amount={product_id ? inventory[product_id].price : 0}></CurrencyFormatter>
          </div>
          <div className={styles.productImageContainer}>
            <img alt={product_id ? inventory[product_id].name : "Image coming soon"} 
                 src={toOptimizedImage(product_id ? inventory[product_id].default_image : "/products/pdp1.jpeg")}>
            </img>
          </div>
        </div>

{/*
        <div className={styles.sectionContainer}>
          <SwatchList
            swatchList={colorOptions}
            activeSwatch={activeSwatch}
            setActiveSwatch={setActiveSwatch}
          />
        </div>

        <div className={styles.sectionContainer}>
          <SizeList
            sizeList={sizeOptions}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
        </div>
        */}

        <Button onClick={() => handleAddToBag()} fullWidth level={'primary'}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default QuickView;
