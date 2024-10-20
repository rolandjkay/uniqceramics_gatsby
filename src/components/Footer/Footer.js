import { Link } from 'gatsby';
import React, { useState } from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
import Dropdown from '../Dropdown/Dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Button from '../Button';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    //e.preventDefault();
    //setEmail('');
    console.log('Subscribe this email: ', email);

    e.preventDefault(); // Prevents the default form submission

    const form = e.target; // The form element that triggered the event
    const formData = new FormData(form); // Collect the form data

    formData.append('email', email);  // Assuming 'email' is a state variable storing the email
  
    // Send the form data as a POST request to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <div className={styles.footerLinkContainer} key={indexLink}>
                  {/* for web version */}
                  <div className={styles.footerLinks}>
                    <span className={styles.linkTitle}>
                      {linkCollection.subTitle}
                    </span>
                    {renderLinks(linkCollection)}
                  </div>
                  {/* for mobile version */}
                  <div className={styles.mobileFooterLinks}>
                    <Accordion
                      customStyle={styles}
                      type={'add'}
                      title={linkCollection.subTitle}
                    >
                      {renderLinks(linkCollection)}
                    </Accordion>
                  </div>
                </div>
              );
            })}
            <div className={styles.newsLetter}>
              <div className={styles.newsLetterContent}>
                <span className={styles.linkTitle}>Newsletter</span>
                <p className={styles.promoMessage}>
                  Get 10% off your first purchase! Plus, be the first to know
                  about sales, new product launches and exclusive offers!
                </p>
                <form
                  className={styles.newsLetterForm}
                  name="mailing-list"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="mailing-list" />
                  <div className="formField">
                    <input id="newsLetterInput" type="email" name="email"
                           placeholder="Email..."
                           width="100%" 
                           style={{padding: '12px 20px 12px 12px', 
                                   boxSizing: "border-box",
                                   marginBottom: "10px"
                                  }
                                   } />
                  </div>
                  {/* REMOVED  
                  <FormInputField
                    icon={'arrow'}
                    id={'newsLetterInput'}
                    value={email}
                    placeholder={'Email'}
                    handleChange={(_, e) => setEmail(e)}
                  />*/}
                  <button type="submit">Subscribe</button>
                </form>
                {/*
                <div className={styles.socialContainer}>
                  {Config.social.youtube && (
                    <div
                      onClick={() => handleSocialClick('youtube')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'youtube'}></Icon>
                    </div>
                  )}

                  {Config.social.instagram && (
                    <div
                      onClick={() => handleSocialClick('instagram')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'instagram'}></Icon>
                    </div>
                  )}

                  {Config.social.facebook && (
                    <div
                      onClick={() => handleSocialClick('facebook')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'facebook'}></Icon>
                    </div>
                  )}

                  {Config.social.twitter && (
                    <div
                      onClick={() => handleSocialClick('twitter')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'twitter'}></Icon>
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/*
      <div className={styles.contentBottomContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.contentBottom}>
            <div className={styles.settings}>
              <Dropdown
                label={'Country/Region'}
                optionList={Config.currencyList}
              />
              <Dropdown label={'Language'} optionList={Config.languageList} />
            </div>
            <div className={styles.copyrightContainer}>
              <div className={styles.creditCardContainer}>
                {Config.paymentOptions.amex && (
                  <img
                    className={styles.amexSize}
                    src={'/amex.png'}
                    alt={'amex'}
                  ></img>
                )}
                {Config.paymentOptions.mastercard && (
                  <img
                    className={styles.masterSize}
                    src={'/master.png'}
                    alt={'mastercard'}
                  ></img>
                )}
                {Config.paymentOptions.visa && (
                  <img
                    className={styles.visaSize}
                    src={'/visa.png'}
                    alt={'visa'}
                  ></img>
                )}
              </div>
              <span>
                {new Date().getFullYear()} (c) . Built by{' '}
                <Button target={true} href="https://www.matterdesign.com.au/">
                  Matter.
                </Button>{' '}
                Powered by{' '}
                <Button target={true} href="https://jamm.matter.design/">
                  JAMM.™
                </Button>
              </span>
            </div>
          </div>
        </Container>
      </div>
      */}
    </div>
  );
};

export default Footer;
