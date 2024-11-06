import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './ProductCard.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Icon from '../Icons/Icon';
import CurrencyFormatter from '../CurrencyFormatter';
import { toOptimizedImage } from '../../helpers/general';
import { useInventory } from '../../context/InventoryProvider';
import { useCrumbs, crumbsToQueryString } from '../../context/BreadcrumbProvider';


const ProductCard = (props) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const { product_id, onAddToCart, height = 580 } = props;
  const { inventory } = useInventory();
  const { crumbs } = useCrumbs();

  /* Originally in the template, but we don't support sales yet. */
  const originalPrice = null;

  const product = inventory[product_id];
  const image = getImage(product.localFiles[0]);

  const handleRouteToProduct = () => {
    navigate(`/product/sample?productId=${product_id}&${crumbsToQueryString(crumbs)}`);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    onAddToCart();
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsWishlist(!isWishlist);
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        onClick={() => handleRouteToProduct()}
        role={'presentation'}
      >
        <GatsbyImage 
             image={image}
             alt={product.name}>
        </GatsbyImage>
        <div
          className={styles.bagContainer}
          role={'presentation'}
          onClick={(e) => handleAddToCartClick(e)}
        >
          <Icon symbol={'bagPlus'} />
        </div>
        <div
          className={styles.heartContainer}
          role={'presentation'}
          onClick={(e) => handleFavorite(e)}
        >
          <Icon symbol={'heart'} />
          <div
            className={`${styles.heartFillContainer} ${
              isWishlist === true ? styles.show : styles.hide
            }`}
          >
            <Icon symbol={'heartFill'}></Icon>
          </div>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.productName}>{inventory[product_id].name}</span>
        <div className={styles.prices}>
          <span
            className={`${originalPrice !== undefined ? styles.salePrice : ''}`}
          >
            <CurrencyFormatter amount={inventory[product_id].default_price / 100}></CurrencyFormatter>
          </span>
          {originalPrice && (
            <span className={styles.originalPrice}>
              <CurrencyFormatter amount={originalPrice}></CurrencyFormatter>
            </span>
          )}
        </div>
        <span className={styles.meta}>{inventory[product_id].description}</span>
      </div>
    </div>
  );
};

export default ProductCard;
