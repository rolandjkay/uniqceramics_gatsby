import React from 'react';
import * as styles from './TermsPolicy.module.css';

const TermsPolicy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Caring for ceramics</h3>

        <p>Crackle glazed pieces will inherently stain overtime, my work is also highly fired stoneware that contains a lot of iron (for the most part), meaning they
          are more susceptible to chipping compared to mass produced wares. They are of course objects I'd expect to see everyday use, but they're artisan and therefore
          require more care than normal mass produced ceramics.</p>

        <p>Please be careful with your pots, wash by hand if possible and refrain from using any strongly staining foods/liquids with them. It helps to wash them
          quickly after use and if you can don't leave liquid in them overnight or for long periods of time. For this same reason I wouldn't recommend using a microwave
          or dishwasher; I always hand wash a majority of my handmade ceramics as it simply isn't as durable as factory-made wares. To reiterate, they can go in the
          dishwasher or microwave but it's best if they aren't. Washing handmade pots by hand is always the best option.</p>

        <p>Some pieces may appear differently from that pictured if there's a quantity option available on that specific item. All of my pots are handmade and therefore
          subtle differences are expected from item to item. On pots listed without a quantity option, it should appear as pictured.</p>

        <h3>Shop updates</h3>

        <p>Please sign up to the newsletter (below) for shop updates and kiln opening dates.</p>

      </div>
    </div>
  );
};

export default TermsPolicy;
