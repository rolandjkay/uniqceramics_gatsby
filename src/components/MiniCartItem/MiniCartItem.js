import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import { navigate } from 'gatsby';
import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import RemoveItem from '../RemoveItem';

import * as styles from './MiniCartItem.module.css';
import { toOptimizedImage } from '../../helpers/general';

const MiniCartItem = (props) => {
  var {cart_id} = props;
  const { decrementItem, incrementItem, cartDetails } = useShoppingCart()

  const cart_detail = (cart_id !== null) ? cartDetails[cart_id] : 
                                          {
                                            image: "/products/pdp1.jpeg",
                                            alt: "Image coming soon",
                                            name: "No Product",
                                            price: 0,
                                          };

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate('/product/sample')}
      >
        <img src={toOptimizedImage(cart_detail.image )} alt={[cart_detail.alt]} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <span className={styles.name}>{cart_detail.name}</span>
          <div className={styles.priceContainer}>
            <CurrencyFormatter amount={cart_detail.price} />
          </div>
          {/*<span className={styles.meta}>Color: {color}</span>
          <span className={styles.meta}>
            Size:
            <span className={styles.size}>{size}</span>
          </span>*/}
        </div>
        <div className={styles.adjustItemContainer}>
          <AdjustItem cart_id={cart_detail.id}/>
        </div>
      </div>
      <div className={styles.closeContainer}>
        <RemoveItem cart_id={cart_detail.id} />
      </div>
    </div>
  );
};

export default MiniCartItem;
