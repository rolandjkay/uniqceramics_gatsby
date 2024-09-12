import { Link, navigate } from 'gatsby';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';

import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const {
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
    cartDetails,
  } = useShoppingCart(); 

  /*const sampleCartItem = {
    image: '/products/contemporary-vase.jpg',
    product_id: 
    alt: '',
    name: 'Lambswool Crew Neck Jumper',
    price: formattedTotalPrice,
    color: 'Anthracite Melange',
    size: 'xs',
    quantity: cartCount,
  };*/

  const cart_items = Object.entries(cartDetails).map(([product_id, detail]) => {
    return {
      image: '/products/contemporary-vase.jpg',
      product_id: detail.product_id,
      alt: '',
      name: 'Lambswool Crew Neck Jumper',
      price: detail.value,
      color: 'Anthracite Melange',
      size: 'xs',
      quantity: detail.quantity,
    }
  });

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>My Bag</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        {cart_items.map(cart_item => (
          <MiniCartItem {...cart_item} />
        ))}
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (USD)</span>
            <span>
              <CurrencyFormatter amount={220} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Taxes and shipping will be calculated at checkout
          </span>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            checkout
          </Button>
          <div className={styles.linkContainer}>
            <Link to={'/shop'}>continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
