import React from "react";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="featured-property">
      <div className="fp-Item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/country/170x136/364.jpg?k=e1060912bc701eda5db297a286037d2b2e3898e34362d7d22d8b754a260ea2fc&o="
          alt=""
          className="fp-image"
        />
        <span className="fpName">Razi da killaa</span>
        <span className="fpCity">Sanga Sydan</span>
        <span className="fpPrice">$100 per day</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp-Item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/city/170x136/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o="
          alt=""
          className="fp-image"
        />
        <span className="fpName">Razi da killaa</span>
        <span className="fpCity">Sanga Sydan</span>
        <span className="fpPrice">$100 per day</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp-Item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/country/170x136/364.jpg?k=e1060912bc701eda5db297a286037d2b2e3898e34362d7d22d8b754a260ea2fc&o="
          alt=""
          className="fp-image"
        />
        <span className="fpName">Razi da killaa</span>
        <span className="fpCity">Sanga Sydan</span>
        <span className="fpPrice">$100 per day</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp-Item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/city/170x136/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o="
          alt=""
          className="fp-image"
        />
        <span className="fpName">Razi da killaa</span>
        <span className="fpCity">Sanga Sydan</span>
        <span className="fpPrice">$100 per day</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
