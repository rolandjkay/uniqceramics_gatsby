import React, { useState } from 'react';

import * as styles from './ProductCardGrid.module.css';
import { useInventory } from '../InventoryProvider/InventoryProvider';

import Drawer from '../Drawer';
import ProductCard from '../ProductCard';
import QuickView from '../QuickView';
import Slider from '../Slider';

const ProductCardGrid = (props) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [quickViewProductId, setQuickViewProductId] = useState(null);
  const { height, columns = 3, spacing, showSlider = false } = props;
  const columnCount = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  const { inventory } = useInventory();

  const renderCards = () => {
    return Object.values(inventory).map((product) => {
      return (
        <ProductCard
          product_id={product.id}
          height={height}
          showQuickView={() => { setQuickViewProductId(product.id); setShowQuickView(true); }}
        />
      );
    });
  };

  return (
    <div className={styles.root} style={columnCount}>
      <div
        className={`${styles.cardGrid} ${
          showSlider === false ? styles.show : ''
        }`}
        style={columnCount}
      >
        {inventory && renderCards()}
      </div>

      {showSlider === true && (
        <div className={styles.mobileSlider}>
          <Slider spacing={spacing}>{inventory && renderCards()}</Slider>
        </div>
      )}

      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView product_id={quickViewProductId} close={() => setShowQuickView(false)} />
      </Drawer>
    </div>
  );
};

export default ProductCardGrid;
