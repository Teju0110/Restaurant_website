import React from "react";
import "./Home.css";
import home from "../Images/home.png";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home_content">
        <p>Chase the new Flavour</p>
        <h1>The key to Fine dining</h1>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button className="home_button">Explore Menu</button>
      </div>
      <div className="header_Img">
        <div className="header_Img1"/>
        <div className="border">
            <div className="header_Img2"/>
        <img src={home} alt="Home Image" />
        <div className="header_Img3"/>
        </div>
        <div className="header_Img4"/>
      </div>
    </div>
  );
};

export default Home;
