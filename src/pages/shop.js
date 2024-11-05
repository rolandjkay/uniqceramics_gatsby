import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';

import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbProvider from '../context/BreadcrumbProvider';
//import CardController from '../components/CardController';
import Container from '../components/Container';
//import Chip from '../components/Chip';
//import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
//import LayoutOption from '../components/LayoutOption';
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


  /*
   * Parse out the category and subcategory,
   */
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let category = params.get("category") ?? "tableware";
  // Could be null, in which case, we display all Tableware
  let subcategory = params.get("subcategory"); 

  let headerLinksData = Config.headerLinks.find(item => item.menuLabel === "Shop")
                                          .category.find(item => item.stripeCategory === category);

  // If someone edited the URL and passed a nonsense category, then default to "tableware"
  if (!headerLinksData) {
    headerLinksData = Config.headerLinks.find(item => item.menuLabel === "Shop")
                                        .category.find(item => item.stripeCategory === "tableware");
    category = "tablewware";
  }
  const categoryLabel = headerLinksData.categoryLabel;

  let subcategoryLabel = null;
  if (subcategory) {
    const subCat = headerLinksData["submenu"].find(item => item.stripeSubcategory === subcategory);
     
    if (subCat) {
      subcategoryLabel = subCat.menuLabel;
    } else {
      subcategory = null;
    }
  }

  const crumbs = subcategory ? [
    { link: '/', label: 'Home' },
    { link: '/shop?category=' + category, label: headerLinksData.categoryLabel },
    { label: subcategoryLabel },
  ] : [
    { link: '/', label: 'Home' },
    { label: headerLinksData.categoryLabel  }
  ]

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
            name={categoryLabel}
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
              <ProductCardGrid category={category} subcategory={subcategory} />
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
