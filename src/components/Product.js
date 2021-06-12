import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import StarRateIcon from '@material-ui/icons/StarRate';
import './../Product.css';
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [ { basket }, dispatch ] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">{title}</p>
        <p className="product__price">
          $
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                <StarRateIcon fontSize="large" />
              </span>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt={'Preview of ' + title}
        title={'Preview of ' + title}
        className="product__image"
      />
      <button className="product__add-to-basket" onClick={addToBasket}>
        <AddIcon />
        &nbsp; Add to Basket
      </button>
    </div>
  );
}

export default Product;
