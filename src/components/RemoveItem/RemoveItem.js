import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';


import Icon from '../Icons/Icon';

import * as styles from './RemoveItem.module.css';

const RemoveItem = (props) => {
  const { isTransparent, cart_id } = props;
  const { removeItem } = useShoppingCart()

  return (
    <div className={styles.root} onClick={() => removeItem(cart_id)}>
      <Icon symbol={'cross'} />
    </div>
  );
};

export default RemoveItem;
