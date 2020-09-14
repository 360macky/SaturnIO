import React from 'react';
import '../Checkout.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="" alt="" title="" className="checkout__ad" />
      </div>
      <div>
        <h2 className="checkout__title">
          <ShoppingCartIcon fontSize="large" />&nbsp;
          Your shopping basket</h2>
        {/* BasketItem */}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
