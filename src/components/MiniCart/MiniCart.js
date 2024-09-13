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

  /*
   * cartDetails is a map from id to object like below
   * {
   *     "id": "prod_QpcJYTziksfEwe",
   *     "price": 500,
   *     "alt": "Contemporary Vase",
   *     "name": "Contemporary Vase",
   *     "image": "https://files.stripe.com/links/MDB8YWNjdF8xUHh3bU8wOXd6YmpVYjN0fGZsX3Rlc3RfTTRTTzhrYmxRNUlMcDlXOWh2OUM2Szgx00n833iUNK",
   *     "meta": "A gorgeously beautiful contemporary vase available is a variety of shades of blue.",
   *     "currency": "GBP",
   *     "quantity": 1,
   *     "value": 500,
   *     "timestamp": "2024-09-12T17:22:25.112Z",
   *     "price_data": {},
   *     "product_data": {},
   *     "formattedValue": "US$5.00",
   *     "formattedPrice": "US$5.00"
   * }
   */

  // Calculate total
  const total = Object.values(cartDetails).reduce((accumulator, detail) => {
    return accumulator + (detail.quantity * detail.price);
  }, 0);

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>My Bag</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        {Object.values(cartDetails).map(cart_detail => (
          <MiniCartItem key={cart_detail.id} cart_id={cart_detail.id} />
        ))}
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (GBP)</span>
            <span>
              <CurrencyFormatter amount={total} appendZero />
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
