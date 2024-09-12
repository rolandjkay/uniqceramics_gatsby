import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import Icon from '../Icons/Icon';
import * as styles from './AdjustItem.module.css';

const AdjustItem = (props) => {
  const { isTransparent, product_id, quantity } = props;
  const { decrementItem, cartDetails } = useShoppingCart()
  const [qty, setQty] = useState(quantity);

  const handleOnChange = (e) => {
    const num = parseInt(e.target.value);
    setQty(num);
  };

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
          if (qty <= 1) return;
          setQty(qty - 1);
          /*decrementItem(product_id);*/
        }}
      >
        <Icon symbol={'minus'}></Icon>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={`${isTransparent === true ? styles.transparentInput : ''}`}
          onChange={(e) => handleOnChange(e)}
          type={'number'}
          value={qty}
        ></input>
      </div>
      <div
        role={'presentation'}
        onClick={() => setQty(qty + 1)}
        className={styles.iconContainer}
      >
        <Icon symbol={'plus'}></Icon>
      </div>
    </div>
  );
};

export default AdjustItem;
