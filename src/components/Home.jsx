import React from "react";
import img2 from "../assests/Nihal.jpg";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>
          Relax to the sound <br /> of nature at our <br /> PaceDream hotel
        </h1>
        <button>Start your search</button>
      </div>

      <img src={img2} alt="" />
    </div>
  );
};

export default Home;
