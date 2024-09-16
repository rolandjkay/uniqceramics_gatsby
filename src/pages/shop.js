import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby"

import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbProvider from '../context/BreadcrumbProvider';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
//import Button from '../components/Button';
import Config from '../config.json';

const ShopPage = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  const crumbs = [
    { link: '/', label: 'Home' },
    { link: '/shop', label: 'Tableware' },
    { label: 'Plates' },
  ];

  return (
    <Layout>
      <BreadcrumbProvider crumbs={crumbs}>
        <div className={styles.root}>
          <Container size={'large'} spacing={'min'}>
            <div className={styles.breadcrumbContainer}>
              <Breadcrumbs
                crumbs={crumbs}
              />
            </div>
          </Container>
          <Banner
            maxWidth={'650px'}
            name={`Tablewear`}
            subtitle={
              'A variety of tableware suitable for all occations, big and small.'
            }
          />
          <Container size={'large'} spacing={'min'}>
            <div className={styles.metaContainer}>
              {/*
              <span className={styles.itemCount}>476 items</span>
              <div className={styles.controllerContainer}>
                <div
                  className={styles.iconContainer}
                  role={'presentation'}
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <Icon symbol={'filter'} />
                  <span>Filters</span>
                </div>
                <div
                  className={`${styles.iconContainer} ${styles.sortContainer}`}
                >
                  <span>Sort by</span>
                  <Icon symbol={'caret'} />
                </div>
              </div>
            */}
            </div>
            {/*
            <CardController
              closeFilter={() => setShowFilter(false)}
              visible={showFilter}
              filters={Config.filters}
            />
            <div className={styles.chipsContainer}>
              <Chip name={'XS'} />
              <Chip name={'S'} />
            </div>
            */}
            <div className={styles.productContainer}>
              <span className={styles.mobileItemCount}>476 items</span>
              <ProductCardGrid></ProductCardGrid>
            </div>
            {/*
            <div className={styles.loadMoreContainer}>
              <span>6 of 456</span>
              <Button fullWidth level={'secondary'}>
                LOAD MORE
              </Button>
            </div>
            */}
          </Container>
        </div>
      </BreadcrumbProvider>

      {/*<LayoutOption />*/}
    </Layout>
  );
};

export default ShopPage;
