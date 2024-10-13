import { Link } from 'gatsby';
import React from 'react';

import * as styles from './ExpandedMenu.module.css';
import { toOptimizedImage } from '../../helpers/general';

const ExpandedMenu = (props) => {
  const { menu } = props;

  if (menu === null || menu === undefined) return <React.Fragment />;
  return (
    <div className={styles.root}>
      <div className={styles.linkContainers}>
        {menu?.map((item, index) => {
          return (
            <div key={index} className={styles.categoryContainer}>
              <Link className={styles.menuLink} to={item.categoryLink}>
                <span className={styles.categoryName}>{item.categoryLabel}</span>
              </Link>
              {/* TEMPORARY HIDE SUB-CATEGORIES
              <ul>
                {item.submenu.map((link, linkIndex) => {
                  return (
                    <li key={linkIndex}>
                      <Link className={styles.menuLink} to={link.menuLink}>
                        {link.menuLabel}
                      </Link>
                    </li>
                  );
                })}
              </ul> */}
            </div>
          );
        })}
      </div>
      {/*<div className={styles.imageContainer}>
        <img src={toOptimizedImage('/headerPic1.png')} alt={'header 1'}></img>
        <img src={toOptimizedImage('/headerPic2.png')} alt={'header 2'}></img>
      </div> */}
    </div>
  );
};

export default ExpandedMenu;
