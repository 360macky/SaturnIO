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
        <div className="home__row">
          <Product
            id="12321341"
            title="National Geographic Backyard Guide to the Night Sky, 2nd Edition"
            price={12.96}
            rating={5}
            image="https://i.imgur.com/7mdvRqP.jpg"
          />
          <Product
            id="49538094"
            title="Telescope Star Finder with Tripod F36050 HD Zoom Monocular Space for Kids and Beginner"
            price={36.0}
            rating={4}
            image="https://i.imgur.com/yG2JJBE.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="MaxUSee Kids Telescope 400x400mm with Tripod & Finder"
            price={35.99}
            rating={3}
            image="https://i.imgur.com/kfCny95.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Powerful Binoculars with Clear Weak light Vision - Lightweight"
            price={58.99}
            rating={4}
            image="https://i.imgur.com/ZsgLO4x.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://i.imgur.com/J8xQgb8.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
