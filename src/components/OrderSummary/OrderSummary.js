import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import { useShoppingCart } from 'use-shopping-cart';

import getStripe from '../../helpers/stripejs';
import Button from '../Button';
import CheckoutButton from '../CheckoutButton';

import FormInputField from '../FormInputField/FormInputField';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';

const OrderSummary = (props) => {
  const [coupon, setCoupon] = useState('');
  const [giftCard, setGiftCard] = useState('');

  const { cartDetails } = useShoppingCart(); 

  // Calculate subtotal
  const subtotal = Object.values(cartDetails).reduce((accumulator, detail) => {
   return accumulator + (detail.quantity * detail.price);
 }, 0);

  return (
    <div className={styles.root}>
      <div className={styles.orderSummary}>
        <span className={styles.title}>order summary</span>
        <div className={styles.calculationContainer}>
          <div className={styles.labelContainer}>
            <span>Subtotal</span>
            <span>
              <CurrencyFormatter amount={subtotal} appendZero />
            </span>
          </div>
          <div className={styles.labelContainer}>
            <span>Shipping</span>
            <span>£10</span>
          </div>
          <div className={styles.labelContainer}>
            <span>Tax</span>
            <span>
              <CurrencyFormatter amount={subtotal * 0.2} appendZero />
            </span>
          </div>
        </div>
        {/*
        <div className={styles.couponContainer}>
          <span>Coupon Code</span>
          <FormInputField
            value={coupon}
            handleChange={(_, coupon) => setCoupon(coupon)}
            id={'couponInput'}
            icon={'arrow'}
          />
          <span>Gift Card</span>
          <FormInputField
            value={giftCard}
            handleChange={(_, giftCard) => setGiftCard(giftCard)}
            id={'couponInput'}
            icon={'arrow'}
          />
        </div>
        */}
        <div className={styles.totalContainer}>
          <span>Total: </span>
          <span>
            <CurrencyFormatter amount={subtotal * 1.2 + 10} appendZero />
          </span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <CheckoutButton
          fullWidth
          level={'primary'}
        />
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>CONTINUE SHOPPING</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
