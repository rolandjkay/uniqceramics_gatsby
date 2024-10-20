import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/tableware.jpg'}
        title={'Tableware'}
        text={'SHOP NOW'}
        link={'/shop?category=tableware'}
      />
      <ProductCollection
        image={'/collections/vases.jpg'}
        title={'Vases'}
        text={'SHOP NOW'}
        link={'/shop?category=vase'}
      />
      <ProductCollection
        image={'/collections/sculpture.jpg'}
        title={'Sculpture'}
        text={'SHOP NOW'}
        link={'/shop?category=sculpture'}
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
