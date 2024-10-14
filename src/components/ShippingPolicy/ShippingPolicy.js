import React from 'react';
import * as styles from './ShippingPolicy.module.css';

const ShippingPolicy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Shipping Policy</h3>

        <p>
          Domestic orders can take up to 5-6 business days, (or longer depending on the circumstances).
        </p>

        <p>
          International orders can take up to 5-15 business days, (or longer depending on the circumstances).
        </p>

        <p>
          If you'd rather come and collect your order please get in touch to arrange this, shipping costs can be refunded accordingly if this is organised.
        </p>

        <p>
          I will always aim to have things sent out as quickly as possible but occasionally, due to events/timings/number of orders, it may take a few days
          before parcels are shipped out. Please be patient, this business is mostly run solely by me, save from some occasional help, I'm not a large
          business with a team of people, every order is packaged, labeled and sent off myself. If for any reason there are delays in sending work out
          from the studio I'll be in touch.
        </p>

        <p>
          When an item is sent from my studio to be shipped abroad, it is in the jurisdiction of the receiving country's postage service and customs. If
          for whatever reason something goes missing, please get in touch with myself and the postage companies. I'll always try my best to help the
          situation but occasionally things can go astray, in which case please get in touch and we can arrange a refund or for another order to be sent out.
          This happens very rarely and I deal with any instances of breakage/missing items on a case by case basis.
        </p>

        <p>
          Orders shipped outside of the UK are shipped DDU (Delivery Duty Unpaid). Customs and import duties are charged once the parcel reaches its
          destination country. These charges must be paid by the recipient of the parcel. Unfortunately, we have no control over these charges, and
          cannot tell you what the cost might be, as customs policies and import duties vary widely from country to country. It might be a good idea
          to contact your local customs office for current charges before you order, so you are not surprised by charges you were not expecting. The
          customer must take full liability for any parcels returned to us due to unpaid customs charges. Postal charges, return shipment costs, customs
          charges and handling fees will all be deductible from any refund due.
        </p>

        <p>
          If you provide the wrong shipping details and fail to identify the error until after the parcel has been shipped out, then the lost parcel is
          your responsibility. Occasionally, an incorrect address can be rectified, and I will of course always try to resolve the situation, but in the
          case it is lost, I will not offer a refund if the package goes missing.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
