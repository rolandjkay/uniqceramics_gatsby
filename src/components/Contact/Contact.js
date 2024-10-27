import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Send Us A Message</h4>
        <p>
          Our Customer Service team are here for all enquiries Monday to Friday,
          9am - 5pm AEDT (Australian Eastern Daylight Savings Time).
        </p>
        <p>We look forward to hearing from you.</p>
      </div>

      <div className={styles.section}>
        <h4>Phone</h4>
        <p>+1 424 280 4971</p>
        <p>Monday to Friday - 9am - 5pm AEDT</p>
      </div>

      <div className={styles.section}>
        <h4>Email</h4>
        <p>
          You can email our Customer Service team at customerservice@example.com
          or via the contact form below:
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              type={'text'}
              labelName={'Full Name'}
              required
            />
            <FormInputField
              id={'phone'}
              type={'number'}
              labelName={'Phone Number'}
              required
            />
            <FormInputField
              id={'email'}
              type={'email'}
              labelName={'Email'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                type={'textarea'}
                labelName={'Comments / Questions'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'submitubmit'}
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
