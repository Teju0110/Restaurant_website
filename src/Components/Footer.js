import React from "react";
import './Footer.css'
import { GrInstagram,GrTwitter,GrFacebookOption } from 'react-icons/gr';

const Footer = () => {
  return (
    <div class name="footer">
      <div className="footer_container">
        <div className="footer_content">
          <h2>Contact Us</h2>
          <p>
            9 W 53rd St, New York, NY 10019, USA <br /></p>
            <p>+1 212-344-1230 <br />
            +1 212-555-1230
          </p>
        </div>
        <div className="footer_logo">
          <h1>Restro</h1>
          <p>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <div className="icons">
            <GrInstagram className="icons_items"/>
            <GrTwitter className="icons_items"/>
            <GrFacebookOption className="icons_items"/>
          </div>
        </div>
        <div className="footer_content">
          <h2>Working Hours</h2>
          <p>
            Monday-Friday: <br />
            08:00 am -12:00 am
          </p>
          <p>
            Saturday-Sunday: <br />
            07:00am -11:00 pm
          </p>
        </div>
        </div>
        <div>
          <p>2021 Gerícht. All Rights reserved.</p>
        </div>
      
    </div>
  );
};

export default Footer;
