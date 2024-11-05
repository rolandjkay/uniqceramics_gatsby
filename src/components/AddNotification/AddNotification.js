import { Link } from 'gatsby';
import React, { useContext } from 'react';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';
import { useInventory } from '../../context/InventoryProvider';

import Button from '../Button';
import Icon from '../Icons/Icon';

import * as styles from './AddNotification.module.css';
import { toOptimizedImage } from '../../helpers/general';

const AddNotification = (props) => {
  const { inventory } = useInventory();

  /*
   * When the notification control is hidden, it is still generating HTML,
   * but productId, and therefore, product will be null. So, we need to
   * have some dummy data instead.
   */ 
  const dummyCartItem = {
    image: '/products/default/1.jpg',
    name: 'No Product Added'
  };

  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotif = ctxAddItemNotification.state?.open;
  const productId = ctxAddItemNotification.state?.productId;
  const product = inventory[productId];

  return (
    <div
      className={`${styles.root} ${
        showNotif === true ? styles.show : styles.hide
      }`}
    >
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Icon symbol={'check'}></Icon>
        </div>
        <span>Item added to bag</span>
      </div>

      <div className={styles.newItemContainer}>
        <div className={styles.imageContainer}>
          <img alt={product ? product.name : dummyCartItem.name }
               src={product !== undefined ? toOptimizedImage(product.default_image) : dummyCartItem.image} />
        </div>
        <div className={styles.detailContainer}>
          <span className={styles.name}>{product ? product.name : "No product found"}</span>
        </div>
      </div>

      <div className={styles.actionContainer}>
        <Button onClick={props.openCart} level={'secondary'}>
          view my bag (1)
        </Button>
        <Button level="primary" href="/cart">
          checkout
        </Button>
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>continue shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default AddNotification;
