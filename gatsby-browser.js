import React from 'react';
import { CartProvider } from 'use-shopping-cart';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';

export const wrapRootElement = ({ element }) => (
  <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
  >
    <NotificationProvider>
      {element}
    </NotificationProvider>
  </CartProvider>
);
