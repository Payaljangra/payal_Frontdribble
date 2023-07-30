import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="main-navbar">
        <div className="menu-items">
          <ul>
            <li>
              <a href="#">Find Talent</a>
            </li>
            <li>
              <a href="#">For Designer</a>
            </li>
            <li>
              <a href="#">Inspiration</a>
            </li>
            <li>
              <a href="#">Learn Design</a>
            </li>
            <li>
              <a href="#">Go Pro</a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <h2>dribble</h2>
        </div>
        <div className="login-signup">
          <ul className="login-signup-desk">
            <li>
              <a href="#">Login</a>
            </li>
            {/* <li>
              <a href="#">.</a>
            </li> */}
            <li>
              <button id="signup">
                <a href="#">SignUp</a>
              </button>
            </li>
            <li>
              <button id="hire">
                <a href="#">Hire Creatives</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ///////////////////////// */}
      <section className="landing-section">
        <h1>App Landing Page Hero Section</h1>
        <p>
          Inspirational designs, illustrations, and graphic elements from the
          world’s best designers.{" "}
        </p>
        <p>Want more inspiration? Browse our search results...</p>
      </section>
    </>
  );
};

export default Navbar;
