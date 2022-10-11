import React, { useState } from "react";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navBar">
      <div className="navBar_large_menu">
        <div className="navBar_Logo">
          <p>Retro</p>
        </div>
        <div className="navBar_links" style={{ gap: "32px" }}>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#video">Restaurant Tour</a>
          </p>
          <p>
            <a href="#contact">Contact Us</a>
          </p>
          <p>
            <a href="#menu">Menu</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
        </div>
        <div className="signIn">
          <p>Log In/Registration</p>
          <div />
          <p>Book Table</p>
        </div>
      </div>

      <div className="navBar_small_menu">
        {toggleMenu == false ? 
        <>
         <div className="navBar_Logo">
          <p>Retro</p>
        </div>
        <GiHamburgerMenu
         className="hamburgerMenu"
         onClick={() => {
             setToggleMenu(true);
            }}
            />
            </>

        :
          <div className="small_menu">
            <MdRestaurantMenu
              color="#DCCA87"
              className="hamburgerMenu"
              onClick={() => {
                setToggleMenu(false);
              }}
            />

            <div className="navBar_small_menu_links">
             <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#video">Restaurant Tour</a>
          </p>
          <p>
            <a href="#contact">Contact Us</a>
          </p>
          <p>
            <a href="#menu">Menu</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
        </div>
            <div
              className="signIn"
              style={{ display: "flex", flexDirection: "column"}}
            >
              <p style={{color:"black"}}>Log In/Registration</p>
              <p style={{color:"black"}}>Book Table</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default NavBar;
