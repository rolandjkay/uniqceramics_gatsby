import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useInventory } from '../../context/InventoryProvider';

import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import Drawer from '../Drawer';
import RemoveItem from '../RemoveItem';

import * as styles from './CartItem.module.css';
import { navigate } from 'gatsby';
import { toOptimizedImage } from '../../helpers/general';

const CartItem = (props) => {
  const { cart_id } = props;

  const { cartDetails } = useShoppingCart(); 
  const { inventory } = useInventory();

  const cart_detail = cartDetails[cart_id] ;
  const product = inventory[cart_detail.product_id];


  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate(`/product/sample?productId=${cart_detail.product_id}`)}
      >
        <img src={toOptimizedImage(product.default_image)} alt={product.name}></img>
      </div>
      <div className={styles.itemContainer}>
        <span className={styles.name}>{product.name}</span>
        {/*<div className={styles.metaContainer}>
          <span>Color: {color}</span>
          <span>Size: {size}</span>
        </div>*/}
      </div>
      <div className={styles.adjustItemContainer}>
        <AdjustItem cart_id={cart_id} />
      </div>
      <div className={styles.priceContainer}>
        <CurrencyFormatter amount={product.default_price/100} appendZero />
      </div>
      <div className={styles.removeContainer}>
        <RemoveItem cart_id={cart_id}/> 
      </div>
    </div>
  );
};

export default CartItem;
