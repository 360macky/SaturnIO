import React from 'react';
import '../Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import CheckIcon from '@material-ui/icons/Check';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { Link } from 'react-router-dom';

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <b>{value}</b>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <Link to="/payment">
        <button className="subtotal__checkout-button">
          <CheckIcon fontSize="large" />
          &nbsp; Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Subtotal;
