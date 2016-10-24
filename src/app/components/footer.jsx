import React from 'react';
import heart from '../../static/img/App/heart.png';

const Footer = () =>
  <div className="footer">
    <div className="made_text">
      <p>
        Made with
        <span>
          <img
            alt="heart"
            src={heart}
            width="12"
            height="12"
            id="heart"
          />
        </span>
        by Victor Pongnian for Mention
      </p>
    </div>
  </div>;

export default Footer;
