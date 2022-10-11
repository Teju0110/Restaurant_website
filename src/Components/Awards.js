import React from "react";
import Award_Items from "../Container/Award_Items";
import { awardData } from "../Data/AwardData.js";
import logo from "../Images/award1.png";
import award from "../Images/award.png";
import "./Awards.css";

const Awards = () => {
  return (
    <div className="awards">
      <div className="award_logo">
        <img src={logo} alt="Award Logo" />
      </div>
      <div className="award_content">
        <h4>Awards & recognition</h4>
        <h1>Our Laurels</h1>
        <div className="award_content_items">
          {awardData.map((item, index) => (
            <Award_Items key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="award_Image">
        <img src={award} alt="Award Logo" />
      </div>
    </div>
  );
};

export default Awards;
