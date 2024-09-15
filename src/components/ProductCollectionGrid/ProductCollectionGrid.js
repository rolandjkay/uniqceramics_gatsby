import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.png'}
        title={'Tablewear'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Vases'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection3.png'}
        title={'Sculpture'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      {/*
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Simple Cotton'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      */}
    </div>
  );
};

export default ProductCollectionGrid;
