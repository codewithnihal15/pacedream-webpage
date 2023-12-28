import React from "react";
import Avatar from "react-avatar";
import img1 from "../assests/pacedream1.png";
import img2 from "../assests/Nihal.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <img src={img1} alt="pacedream" />
      <Link to={"/"}>Room Stays</Link>
      <Link to={"/"}>Find Roommate</Link>
      <Link to={"/"}>Company</Link>
      <Link to={"/"}>Help</Link>

      <div>
        <button>Manage Listings</button>
        <Avatar src={img2} alt="nihal" round={true} size="45" />
      </div>
    </nav>
  );
};

export default Header;
