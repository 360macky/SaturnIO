import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Logotipo from '../logotipo.png';
import '../Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo-container">
          <img
            src={Logotipo}
            className="header__logo"
            alt="Saturn"
            title="Saturn"
          />
        </div>
      </Link>
      <div className="header__search">
        <input
          type="text"
          className="header__search-input"
          autoFocus
          placeholder="Search telescopes, books an movies"
        />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__small-label">Hello user</span>
          <span className="header__large-label">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__small-label">Return</span>
          <span className="header__large-label">&amp; Orders</span>
        </div>
        <div className="header__option">
          <span className="header__small-label">Your</span>
          <span className="header__large-label">Prime</span>
        </div>
        <div className="header__option-basket">
          <Link to="/checkout">
            <ShoppingBasketIcon />
            <span className="header__large-label header__basket-count">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
