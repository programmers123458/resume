import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div>
      <section id="how-it-works">
        <div class="container">
          <h2>How It Works</h2>
          <div class="flex">
            <div>
              <span class="fas fa-home"></span>
              <h4>Find a Property.</h4>
              <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
            </div>

            <div>
              <span class="fas fa-dollar-sign"></span>
              <h4>Buy a Property.</h4>
              <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
            </div>

            <div>
              <span class="fas fa-chart-line"></span>
              <h4>Investing.</h4>
              <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
