import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
          alt=""
          className="featured-image"
        />
        <div className="featured-title">
          <h1>Dyblin</h1>
          <h2>123 houses</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/336582317.jpg?k=29d57859ffc7bf7e673565e6d487a7acfff9ce4e9c3c6f13fc2a08c4e33b1f85&o=&hp=1"
          alt=""
          className="featured-image"
        />
        <div className="featured-title">
          <h1>Bhalial</h1>
          <h2>345 houses</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/115648832.jpg?k=ad43d01c73b4866e7ad19068c6ef61b3ecb44c59f8d0862290fb9281e8eb2703&o=&hp=1"
          alt=""
          className="featured-image"
        />
        <div className="featured-title">
          <h1>London</h1>
          <h2>532 houses</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
