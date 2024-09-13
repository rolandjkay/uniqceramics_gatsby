import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { CartProvider } from 'use-shopping-cart';

import Header from '../Header';
import Footer from '../Footer';
import * as styles from './Layout.module.css';

// CSS not modular here to provide global styles
import './Globals.css';

const Layout = ({ props, children, disablePaddingBottom = false }) => {
  return (
    <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY ? process.env.GATSBY_STRIPE_PUBLISHABLE_KEY : "DUMMY_PUBLISHABLE_KEY"}
    successUrl="stripe.com"
    cancelUrl="twitter.com/dayhaysoos"
    currency="USD"
    allowedCountries={['US', 'GB', 'CA']}
    billingAddressCollection={true}
  >
    <>
      <Helmet>
        {/* Add any sitewide scripts here */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Helmet>

      <Header />
      <main
        className={`${styles.main} ${
          disablePaddingBottom === true ? styles.disablePaddingBottom : ''
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
    </CartProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
