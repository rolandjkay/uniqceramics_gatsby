import React from 'react';
import * as styles from './accountSuccess.module.css';
import { useShoppingCart } from 'use-shopping-cart';


import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const OrderConfirmPage = (props) => {
  /*
   * Clear the cart
   */
  const isEmpty = (obj) => Object.entries(obj).length === 0;
  const { clearCart, cartDetails } = useShoppingCart();
  if (!isEmpty(cartDetails)) {
    clearCart();
  }

  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Thank You!</h1>
          <p>
            We are now processing your order. If you have any concerns feel free
            to email us at uniqc.ceramics@gmail.com
          </p>
          <div className={styles.actionContainer}>
            {/*<ActionCard
              title={'Order Status'}
              icon={'delivery'}
              subtitle={'Check your order status'}
              link={'/account/orders'}
              size={'lg'}
            /> */}

            <ActionCard
              title={'Shop'}
              icon={'bag'}
              subtitle={'Continue Shopping'}
              link={'/shop'}
            />

            {/*<ActionCard
              title={'FAQs'}
              icon={'question'}
              subtitle={'Check out FAQs page'}
              link={'/faq'}
            /> */}

            <ActionCard
              title={'Contact Us'}
              icon={'phone'}
              subtitle={'Reach out to us'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
