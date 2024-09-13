import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import getStripe from '../../helpers/stripejs';

const CheckoutButton = () => {
  const { cartDetails } = useShoppingCart();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    // Convert cart details to an array of items with predefined Price IDs
    const lineItems = Object.values(cartDetails).map((item) => ({
    price: item.priceId,  // This is the pre-configured Price ID from Stripe
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

  return <button onClick={handleCheckout}>Checkout Foo</button>;
}; 

export default CheckoutButton;