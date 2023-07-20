import React from "react";
import "./SearchItem.css";
const SearchItem = () => {
  return (
    <div className="search-item">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
        alt=""
        className="search-item-image"
      />
      <div className="si-description">
        <h1 className="si-title">Aparthotel Stare Miasto</h1>
        <span className="si-distance">300 m from center</span>
        <span className="si-taxiOp">Free Airport taxi</span>
        <span className="si-subTitle">
          Studio Apartments with Air Conditioning
        </span>
        <span className="si-feature">
          Located 1640 feet from Wawel Royal Castle and 2297 feet from the
          Market
        </span>
        <span className="si-cancelOp">Free Cancellation</span>
        <span className="si-cancel-subTitle">
          You can cancel later , so lock in this great price today !
        </span>
      </div>
      <div className="si-details">
        <div className="si-ratings">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="si-details-text">
          <span className="si-price">$856</span>
          <span className="si-taxOp">Includes taxes and fees</span>
          <button>See Availabiltiy</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
