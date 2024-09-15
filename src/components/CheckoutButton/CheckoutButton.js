import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import getStripe from '../../helpers/stripejs';

import * as styles from '../Button/Button.module.css';
import { useInventory } from '../../context/InventoryProvider';

const CheckoutButton = ({
    children,
    level,
    type,
    size,
    disabled,
    onClick,
    className,
    flat,
    link,
    fullWidth,
    theme
  }) => {
  const classes = level ? [styles.button] : [styles.link];

  if (level in styles) {
    classes.push(styles[level]);
  }
  if (size in styles) {
    classes.push(styles[size]);
  }
  if (theme in styles) {
    classes.push(styles[theme]);
  }

  if (disabled) {
    classes.push(styles.disabled);
  }
  if (flat) {
    classes.push(styles.flat);
  }
  if (link) {
    classes.push(styles.link);
  }
  if (fullWidth) {
    classes.push(styles.fullWidth);
  }
  if (className) {
    classes.push(className);
  }

  const classOutput = classes.join(' ');

  const { cartDetails } = useShoppingCart();
  const { inventory } = useInventory();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    // Convert cart details to an array of items with predefined Price IDs
    const lineItems = Object.values(cartDetails).map((item) => ({
      price: inventory[item.product_id].default_price_id,  // This is the pre-configured Price ID from Stripe
      quantity: item.quantity,
    }));

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
    lineItems: lineItems,
    mode: 'payment',
    successUrl: `${window.location.origin}/orderConfirm`,
    cancelUrl: `${window.location.origin}`,
    });

    if (error) {
      console.error("Stripe Checkout error:", error);
    }
  };

  return <button className={classOutput} onClick={handleCheckout}>{children}</button>;
}; 

export default CheckoutButton;