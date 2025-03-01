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
              <p>
                Looking for your dream home or the perfect investment? Our Find
                a Property tool makes it easy to search for homes, apartments,
                commercial spaces, and more. With advanced filters and
                up-to-date listings, you can discover properties that match your
                preferences and budget effortlessly.
              </p>
            </div>

            <div>
              <span class="fas fa-dollar-sign"></span>
              <h4>Buy a Property.</h4>
              <p>
                Find your perfect home or investment property with ease! Whether
                you're looking for a cozy apartment, a spacious family house, or
                a commercial space, our platform offers a wide selection of real
                estate options to suit your needs.
              </p>
            </div>

            <div>
              <span class="fas fa-chart-line"></span>
              <h4>Investing.</h4>
              <p>
                Unlock the potential of real estate investment and grow your
                wealth with high-value properties in prime locations. Whether
                you're a first-time investor or an experienced real estate
                buyer, we provide the resources, insights, and expert guidance
                to help you make smart and profitable decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
