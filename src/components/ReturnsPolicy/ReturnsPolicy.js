import React from 'react';
import * as styles from './ReturnsPolicy.module.css';

const ReturnsPolicy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Returns Policy</h3>

        <p>
          Returns are only accepted if I accidentally ship out the wrong items, (I'm only human, mistakes can happen), if this does occur, please get in touch and I'll
          rectify the order. If the pots have been used I cannot refund them or exchange due to their crackled nature.
        </p>

        <p>
          If your parcel hasn't arrived a week after dispatch please get in touch with me immediately so I can attempt to fix or find the parcel as after 10 days
          there's an extraordinarily low chance I'll be able to find it or correct the situation. I usually ship about 200-250 parcels and cannot track each one
          individually and check, and double check, that it has arrived correctly. I do not offer full refunds, (partial refund is dependant on situation), if
          you get in touch more than a month after the original dispatch date as because it's so late there's virtually nothing I can do as the couriers normally
          don't refund shipping or insurance a month or more after dispatch.
        </p>

      </div>
    </div>
  );
};

export default ReturnsPolicy;
