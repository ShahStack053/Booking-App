import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";
const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/187968659.jpg?k=c17535597931316eee1ab932d5433f16974c869a4ce1bbda6da6a9f24a3d9e84&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153937477.jpg?k=82a3e4a701d7d534b32ea6e96eaeecb466903e107b9bd07298abbf2f08024ff9&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336582317.jpg?k=29d57859ffc7bf7e673565e6d487a7acfff9ce4e9c3c6f13fc2a08c4e33b1f85&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/115648832.jpg?k=ad43d01c73b4866e7ad19068c6ef61b3ecb44c59f8d0862290fb9281e8eb2703&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336583079.jpg?k=1f649baaffed9f59d2ca80809a6e6d53363967e8e0639749ec30551359b24c64&o=&hp=1",
  },
];
const Hotel = () => {
  const [slideNo, setSlideNo] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSlideNo(i);
    setOpen(true);
  };
  const handleArrow = (i) => {
    let newSlideNo;
    if (i == "l") {
      newSlideNo = slideNo === 0 ? 5 : slideNo - 1;
    } else {
      newSlideNo = slideNo === 5 ? 0 : slideNo + 1;
    }

    setSlideNo(newSlideNo);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel-container">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close-image"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="slider-arrow"
              onClick={() => handleArrow("l")}
            />
            <div className="slider-wrapper">
              <img src={photos[slideNo].src} alt="" className="slider-Image" />
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="slider-arrow"
              onClick={() => handleArrow("r")}
            />
          </div>
        )}
        <div className="hotel-wrapper">
          <button className="book-now-btn">Reserve or Book now!</button>
          <h1 className="hotel-title">Grand Deedaran hotel</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> Gołębia 2, Old Town, 31-007 Krakow, Poland</span>
          </div>
          <span className="hotel-distance">
            {" "}
            Excellent location – 500m from center
          </span>
          <span className="hotel-price-highlight">
            Book a stay over ‎PKR 81,963‏ at this property and get a free
            airport taxi{" "}
          </span>
          <div className="hotel-images-div">
            {photos.map((e, i) => {
              return (
                <div className="hotel-image-wrapper" key={e.src}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={e.src}
                    alt=""
                    className="hotel-images"
                  />
                </div>
              );
            })}
          </div>
          <div className="hotel-details">
            <div className="hotel-detail-text">
              <h1 className="hotel-title">Stay in the heart of karakow</h1>
              <p className="hotel-description">
                {" "}
                Located in Dziwiszów, 18 miles from Western City, Karkonoski
                Widok provides accommodations with a garden, free private
                parking and a shared lounge. The property is around 18 miles
                from Dinopark, 18 miles from Wang Church and 18 miles from
                Szklarska Poreba Bus Station. Szklarki Waterfall is 21 miles
                from the guesthouse and Kamienczyka Waterfall is 21 miles away.
                Featuring a private bathroom, rooms at the guesthouse also
                provide guests with free WiFi, while some rooms will provide you
                with a balcony. The area is popular for cycling, and bike rental
                is available at Karkonoski Widok. Death Turn is 19 miles from
                the accommodation, while Izerska Railway is 19 miles away. The
                nearest airport is Copernicus Wrocław Airport, 57 miles from
                Karkonoski Widok.
              </p>
            </div>
            <div className="hotel-detail-price">
              <h1>Perfect for a 3-night stay !</h1>
              <span>
                Couples in particular like the location – they rated it 9.2 for
                a two-person trip.
              </span>
              <h2>
                <b>$942</b> (3 Nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
