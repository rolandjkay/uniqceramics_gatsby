import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import Drawer from '../Drawer';
import RemoveItem from '../RemoveItem';
import QuickView from '../QuickView';

import * as styles from './CartItem.module.css';
import { navigate } from 'gatsby';
import { toOptimizedImage } from '../../helpers/general';

const CartItem = (props) => {
  const { cart_id } = props;

  const [showQuickView, setShowQuickView] = useState(false);
  const { cartDetails } = useShoppingCart(); 

  const cart_detail = cartDetails[cart_id] ;


  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate('/product/sample')}
      >
        <img src={toOptimizedImage(cart_detail.image)} alt={cart_detail.alt}></img>
      </div>
      <div className={styles.itemContainer}>
        <span className={styles.name}>{cart_detail.name}</span>
        {/*<div className={styles.metaContainer}>
          <span>Color: {color}</span>
          <span>Size: {size}</span>
        </div>*/}
        <div
          className={styles.editContainer}
          role={'presentation'}
          onClick={() => setShowQuickView(true)}
        >
          <span>Edit</span>
        </div>
      </div>
      <div className={styles.adjustItemContainer}>
        <AdjustItem cart_id={cart_id} />
      </div>
      <div className={styles.priceContainer}>
        <CurrencyFormatter amount={cart_detail.price} appendZero />
      </div>
      <div className={styles.removeContainer}>
        <RemoveItem cart_id={cart_id}/> 
      </div>
      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        QuickView not working
        {/*<QuickView product={null} close={() => setShowQuickView(false)} /> */}
      </Drawer>
    </div>
  );
};

export default CartItem;
