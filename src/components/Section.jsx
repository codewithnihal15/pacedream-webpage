import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Section = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleDateFromChange = (event) => {
    setDateFrom(event.target.value);
  };

  const handleDateToChange = (event) => {
    setDateTo(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <section className="section">
      <div>
        <label htmlFor="location">Where</label>
        <input
          type="text"
          id="location"
          value={selectedLocation}
          onChange={handleLocationChange}
          placeholder="Choose a location"
        />
      </div>
      <div>
        <label htmlFor="dateFrom">From</label>
        <input
          type="date"
          id="dateFrom"
          value={dateFrom}
          onChange={handleDateFromChange}
        />
      </div>
      <div>
        <label htmlFor="dateTo">Until</label>
        <input
          type="date"
          id="dateTo"
          value={dateTo}
          onChange={handleDateToChange}
        />
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </section>
  );
};

export default Section;
