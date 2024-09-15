import { Link, navigate } from 'gatsby';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useInventory } from '../InventoryProvider/InventoryProvider';

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
   *     "product_id": "prod_QpcJYTziksfEwe",
   *     "quantity": 1,
   * }
   */

  // Calculate total
  const { inventory } = useInventory();
  const total = Object.values(cartDetails).reduce((accumulator, detail) => {
    return accumulator + detail.quantity * (inventory[detail.product_id]?.default_price ?? 0);
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
              <CurrencyFormatter amount={total/100} appendZero />
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
