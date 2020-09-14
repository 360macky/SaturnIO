import React from 'react';
import './../Product.css';

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star">
                ⭐
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
      <button className="product__add-to-basket">Add to Basket</button>
    </div>
  );
}

export default Product;
