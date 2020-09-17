import React from 'react';
import '../CheckoutProduct.css';
import DeleteIcon from '@material-ui/icons/Delete';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      <img
        src={image}
        alt={'Preview of ' + title}
        className="checkout-product__image"
      />
      <div className="checkout-product__info">
        <p className="checkout-product__title">{title}</p>
        <p className="checkout-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarRateIcon key={index} />
            ))}
        </div>
        <button onClick={removeFromBasket}>
          <DeleteIcon />
          &nbsp; Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
