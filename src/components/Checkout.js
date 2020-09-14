import React from 'react';
import '../Checkout.css';

import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="" alt="" title="" className="checkout__ad" />
      </div>
      <div>
        <h2 className="checkout__title">Your shopping basket</h2>
        {/* BasketItem */}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
