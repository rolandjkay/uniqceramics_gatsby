import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useInventory } from '../../context/InventoryProvider';

import { navigate } from 'gatsby';
import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import RemoveItem from '../RemoveItem';

import * as styles from './MiniCartItem.module.css';
import { toOptimizedImage } from '../../helpers/general';

const MiniCartItem = (props) => {
  var {cart_id} = props;
  const { decrementItem, incrementItem, cartDetails } = useShoppingCart();
  const { inventory } = useInventory();

  const cart_detail = cartDetails[cart_id];

  const product = inventory[cart_detail.product_id];

  const item_details = (cart_detail !== null && product) 
                                         ? {
                                            image : product.default_image,
                                            alt: product.name,
                                            name: product.name,
                                            price: product.default_price,
                                           }
                                          : 
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
        onClick={() => navigate(`/product/sample?productId=${cart_detail.product_id}`)}
      >
        <img src={toOptimizedImage(item_details.image )} alt={[item_details.alt]} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <span className={styles.name}>{item_details.name}</span>
          <div className={styles.priceContainer}>
            <CurrencyFormatter amount={item_details.price / 100} />
          </div>
          {/*<span className={styles.meta}>Color: {color}</span>
          <span className={styles.meta}>
            Size:
            <span className={styles.size}>{size}</span>
          </span>*/}
        </div>
        <div className={styles.adjustItemContainer}>
          <AdjustItem cart_id={cart_id}/>
        </div>
      </div>
      <div className={styles.closeContainer}>
        <RemoveItem cart_id={cart_id} />
      </div>
    </div>
  );
};

export default MiniCartItem;
