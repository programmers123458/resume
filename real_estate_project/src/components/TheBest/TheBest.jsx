import React from "react";
import "./TheBest.css";

const TheBest = () => {
  return (
    <div>
      <section id="the-best">
        <div class="flex container">
          <img
            src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Property 1"
          />
          <div>
            <h2>We Are the Best Real Estate Company</h2>
            <p class="large-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Est qui eos quasi ratione nostrum excepturi id recusandae fugit
              omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit
              omnis iste velit maxime.
            </p>
            <ul>
              <li>Placeat maxime animi minus</li>
              <li>Placeat maxime animi minus</li>
              <li>Placeat maxime animi minus</li>
              <li>Placeat maxime animi minus</li>
              <li>Placeat maxime animi minus</li>
            </ul>
            <button class="rounded">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheBest;
