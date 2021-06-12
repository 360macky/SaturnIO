import React from 'react';
import './../Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer__first-block">
        <p>
          <a
            href="https://github.com/360macky/Saturn/blob/master/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            License
          </a>
        </p>
        <p>
          <a
            href="https://github.com/360macky/Saturn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </p>
        <p>
          <a
            href="https://github.com/360macky/Saturn/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Issues
          </a>
        </p>
        <p>
          <a
            href="https://portfolio.marceloarias.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Marcelo Arias portfolio"
          >
            Portfolio
          </a>
        </p>
      </div>
      <div className="footer__second-block"></div>
    </footer>
  );
}

export default Footer;
