import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="flex container">
          <div class="footer-about">
            <h5>About Stated</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>

          <div class="footer-quick-links">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="footer-subscribe">
            <h5>Subscribe to our Newsletter</h5>
            <div id="subscribe-container">
              <input type="text" placeholder="Enter Email" />
              <button class="right-rounded">Send</button>
            </div>

            <h5 class="follow-us">Follow Us</h5>
            <ul>
              <li>
                <a href="#">
                  <span class="fab fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-linkedin-in"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <small>
          Copyright &copy; 2025 All rights reserved | This template is made with{" "}
          <span class="fa fa-heart"></span> by{" "}
          <a href="https://diyor-khasanov.netlify.app/">Diyor Khasanov</a>
        </small>
      </footer>
    </div>
  );
};

export default Footer;
