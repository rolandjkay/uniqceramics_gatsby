import { Link } from 'gatsby';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import Brand from '../components/Brand';
import CartItem from '../components/CartItem';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Icon from '../components/Icons/Icon';
import OrderSummary from '../components/OrderSummary';

import * as styles from './cart.module.css';

const CartPage = (props) => {
  const { cartDetails } = useShoppingCart(); 

  return (
    <div>
      <div className={styles.contentContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.headerContainer}>
            <div className={styles.shoppingContainer}>
              <Link className={styles.shopLink} to={'/shop'}>
                <Icon symbol={'arrow'}></Icon>
                <span className={styles.continueShopping}>
                  Continue Shopping
                </span>
              </Link>
            </div>
            <Brand />
            {/*
            <div className={styles.loginContainer}>
              <Link to={'/login'}>Login</Link>
            </div> */}
          </div>
          <div className={styles.summaryContainer}>
            <h3>My Bag</h3>

            <div className={styles.cartContainer}>
              <div className={styles.cartItemsContainer}>
                {Object.values(cartDetails).map(cart_detail => (
                  <CartItem key={cart_detail.id} cart_id={cart_detail.id} />
                ))}
              </div>
              <OrderSummary />
            </div> 
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
