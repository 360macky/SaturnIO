import React from 'react';
import '../Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__cover">
          <h1>Everything about astronomy with a click</h1>
        </div>
        <div class="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={5}
          />
          <Product />
        </div>
        <div class="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div class="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
