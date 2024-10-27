import React from 'react';
import * as styles from './ReturnsPolicy.module.css';

const ReturnsPolicy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Returns Policy</h3>

        <p>
          Returns are only accepted if I accidentally ship out the wrong items; I'm only human, mistakes can happen. If this does occur, please get in touch and I'll
          rectify the order. If the items have been used, I cannot refund them or exchange due to their crackled nature.
        </p>

        <p>
          If your parcel hasn't arrived a week after dispatch, please get in touch with me immediately, so I can attempt to find the parcel. After ten days,
          there's an extraordinarily low chance I'll be able to find it or correct the situation. I do not offer full refunds, if
          you get in touch more than a month after the original dispatch date, because it's so late there's virtually nothing I can do; the couriers normally
          don't refund shipping or insurance a month or more after dispatch. Partial refunds are dependant on situation.
        </p>
        <p>
          Made-to-order items usually take about 2-4 weeks to create. All items
          listed on the website are ready to ship, unless otherwise stated.
        </p>

      </div>
    </div>
  );
};

export default ReturnsPolicy;
