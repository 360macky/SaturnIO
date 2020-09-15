import React from 'react';
import '../Checkout.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

import { useStateValue } from '../StateProvider';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div>
        <h2 className="checkout__title">
          <ShoppingCartIcon fontSize="large" />
          &nbsp; Your shopping basket
        </h2>
        <div className="checkout-products">
          {basket.map((product, index) => (
            <CheckoutProduct
              key={index}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
