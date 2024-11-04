import React, { useState } from 'react';

import Drawer from '../Drawer';

import * as styles from './FavoriteCard.module.css';
import { toOptimizedImage } from '../../helpers/general';

const FavoriteCard = (props) => {
  const { color, size, img, alt, showConfirmDialog } = props;
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.imageContainer}>
          <img src={toOptimizedImage(img)} alt={alt} />
        </div>
        <div className={styles.metaContainer}>
          <span>Color: {color}</span>
          <span>Size: {size}</span>
        </div>
      </div>
      <div className={styles.actionContainer}>>
        <span role={'presentation'} onClick={showConfirmDialog}>
          Remove
        </span>
      </div>
    </div>
  );
};

export default FavoriteCard;
