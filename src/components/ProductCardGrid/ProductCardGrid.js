import React, { useContext } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import * as styles from './ProductCardGrid.module.css';
import { useInventory } from '../../context/InventoryProvider';
import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import ProductCard from '../ProductCard';
import Slider from '../Slider';

const ProductCardGrid = (props) => {
  const { height, columns = 3, spacing, showSlider = false , category = "tableware", subcategory = "plate"} = props;
  const columnCount = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  const { inventory } = useInventory();
  const { addItem, cartDetails, incrementItem } = useShoppingCart();
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;

  const handleAddToCart = (product_id) => {
    const item = Object.values(cartDetails).find((i) => i.product_id === product_id);

    if (item) 
    {
      incrementItem(item.id);
    }
    else
    {
      addItem({product_id: product_id, currency: "GBP"});
    }
    showNotification(product_id);
  };

  const renderCards = () => {
    return Object.values(inventory)
    .filter((product) => {
      return (
        product.metadata.category === category && 
        (product.metadata.subcategory === subcategory || subcategory === null)
      )
    })
    .map((product) => {
      return (
        <ProductCard
          key={product.id}
          product_id={product.id}
          height={height}
          onAddToCart={() => { handleAddToCart(product.id); }}
        />
      );
    });
  };

  return (
    <div className={styles.root} style={columnCount}>
      <div
        className={`${styles.cardGrid} ${
          showSlider === false ? styles.show : ''
        }`}
        style={columnCount}
      >
        {inventory && renderCards()}
      </div>

      {showSlider === true && (
        <div className={styles.mobileSlider}>
          <Slider spacing={spacing}>{inventory && renderCards()}</Slider>
        </div>
      )}
    </div>
  );
};

export default ProductCardGrid;
