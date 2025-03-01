import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div id="header-hero-container">
        <header>
          <div class="flex container">
            <a id="logo" href="#">
              STATED.
            </a>
            <nav>
              <button id="nav-toggle" class="hamburger-menu">
                <span class="strip"></span>
                <span class="strip"></span>
                <span class="strip"></span>
              </button>

              <ul id="nav-menu">
                <li>
                  <a href="#" class="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="http://www.google.com" target="_blank">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#">Agents</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li id="close-flyout">
                  <span class="fas fa-times"></span>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section id="hero">
          <div class="fade"></div>
          <div class="hero-text">
            <h1>Buy and sell real estate properties</h1>
            <p>
              Welcome to STATED, where finding your dream home becomes a
              seamless experience. Whether you're looking for a cozy apartment,
              a luxurious villa, or a commercial space, we bring you the best
              real estate options tailored to your needs.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
