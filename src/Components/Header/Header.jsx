import React, { useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleCounter = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "dec" ? options[name] - 1 : options[name] + 1,
      };
    });
  };
  const HandleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header-container listMode" : "header-container"
        }
      >
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span className="header-list-title">Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span className="header-list-title">Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span className="header-list-title">Car Rentals</span>{" "}
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span className="header-list-title">Airport Taxis</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span className="header-list-title">Attraction</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header-title">Find your next stay</h1>
            <p className="header-description">
              Search deals on hotels, homes, and much more...
            </p>
            <button className="header-btn">Sign In / Register</button>
            <div className="header-search">
              <div className="header-search-item">
                <FontAwesomeIcon icon={faBed} className="header-search-icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header-search-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header-search-icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header-search-text"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="header-search-icon"
                />
                <span
                  className="header-search-text"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="options-item">
                      <span className="options-text">Adult</span>
                      <div className="options-counter">
                        <button
                          disabled={options.adult === 0}
                          className="options-counter-btn"
                          onClick={() => handleCounter("adult", "dec")}
                        >
                          -
                        </button>
                        <span className="options-counter-no">
                          {options.adult}
                        </span>
                        <button
                          className="options-counter-btn"
                          onClick={() => handleCounter("adult", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options-item">
                      <span className="options-text">Children</span>
                      <div className="options-counter">
                        <button
                          disabled={options.children === 0}
                          className="options-counter-btn"
                          onClick={() => handleCounter("children", "dec")}
                        >
                          -
                        </button>
                        <span className="options-counter-no">
                          {options.children}
                        </span>
                        <button
                          className="options-counter-btn"
                          onClick={() => handleCounter("children", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options-item">
                      <span className="options-text">Room</span>
                      <div className="options-counter">
                        <button
                          disabled={options.room === 0}
                          className="options-counter-btn"
                          onClick={() => handleCounter("room", "dec")}
                        >
                          -
                        </button>
                        <span className="options-counter-no">
                          {options.room}
                        </span>
                        <button
                          className="options-counter-btn"
                          onClick={() => handleCounter("room", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search-item">
                <button className="header-btn" onClick={HandleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
