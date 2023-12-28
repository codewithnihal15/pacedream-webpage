import React from "react";
import { NavLink } from "react-router-dom";
import Section from "./Section";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="nav">
        <NavLink to={"/"} exact activeClassName="active-link">
          Room Stays
        </NavLink>
        <NavLink to={"/"} activeClassName="active-link">
          Hourly
        </NavLink>
        <NavLink to={"/"} activeClassName="active-link">
          Find Roommate
        </NavLink>
        <NavLink to={"/"} activeClassName="active-link">
          My Pace
        </NavLink>
      </nav>
      <hr />
      <Section />
    </div>
  );
};

export default Footer;
