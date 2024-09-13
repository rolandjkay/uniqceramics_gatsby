import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import Icon from '../Icons/Icon';
import * as styles from './AdjustItem.module.css';

const AdjustItem = (props) => {
  const { isTransparent, cart_id } = props;
  const { decrementItem, incrementItem, cartDetails } = useShoppingCart()

  const handleOnChange = (e) => {
    const num = parseInt(e.target.value);
  };

  const quantity = cart_id == null ? -1 : cartDetails[cart_id].quantity;

  return (
    <div
      className={`${styles.root} ${
        isTransparent === true ? styles.transparent : ''
      }`}
    >
      <div
        className={styles.iconContainer}
        role={'presentation'}
        onClick={() => {
          if (quantity > 1) {
            decrementItem(cart_id);
          }
        }}
      >
        <Icon symbol={'minus'}></Icon>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={`${isTransparent === true ? styles.transparentInput : ''}`}
          onChange={(e) => handleOnChange(e)}
          type={'number'}
          value={quantity}
        ></input>
      </div>
      <div
        role={'presentation'}
        onClick={() => incrementItem(cart_id)}
        className={styles.iconContainer}
      >
        <Icon symbol={'plus'}></Icon>
      </div>
    </div>
  );
};

export default AdjustItem;
