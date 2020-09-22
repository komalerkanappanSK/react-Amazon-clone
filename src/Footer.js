import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer__totop">
        <span className="footer__totopText" onClick={scrollTop}>
          Back to top
        </span>
      </div>
      <div className="footer__row">
        <div className="footer__text">
          <div className="footer__colheader">Get to Know Us</div>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Sustainability</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
          </ul>
        </div>

        <div className="footer__text">
          <div className="footer__colheader">Make Money with Us</div>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>See More Make Money with Us</li>
          </ul>
        </div>
        <div className="footer__text">
          <div className="footer__colheader">Amazon Payment Product</div>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer__text">
          <div className="footer__colheader">Let Us Help You</div>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Amazon Prime</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <span>
        <div className="footer__logoname">
          <Link to="/">
            <img
              className="footer__logo"
              src=" http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>
          <h5 className="footer__end">
            | © 2020, Amazom Clone, By Komaler Kanappan
          </h5>
        </div>
      </span>
    </div>
  );
}

export default Footer;
