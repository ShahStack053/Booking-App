import React, { useState } from "react";
import "./List.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/SearchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div className="list">
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-search-title"> Search </h1>
            <div className="list-search-item">
              <label>Destinations</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list-search-item">
              <label>Check-In Date</label>
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="list-search-item">
              <label>Options</label>
              <div className="ls-option-container">
                <div className="ls-options-items">
                  <span className="ls-options-text">
                    Min Price <small>per Night</small>
                  </span>
                  <input type="text" className="ls-option-input" />
                </div>
                <div className="ls-options-items">
                  <span className="ls-options-text">
                    Max Price <small>per Night</small>
                  </span>
                  <input type="text" className="ls-option-input" />
                </div>
                <div className="ls-options-items">
                  <span className="ls-options-text">Adult</span>
                  <input
                    type="Number"
                    min={0}
                    className="ls-option-input"
                    placeholder={options.adult}
                  />
                </div>
                <div className="ls-options-items">
                  <span className="ls-options-text">Children</span>
                  <input
                    type="Number"
                    min={0}
                    className="ls-option-input"
                    placeholder={options.children}
                  />
                </div>
                <div className="ls-options-items">
                  <span className="ls-options-text">Room</span>
                  <input
                    type="Number"
                    min={0}
                    className="ls-option-input"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list-result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
