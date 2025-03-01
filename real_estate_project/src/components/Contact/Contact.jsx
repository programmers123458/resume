import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div class="container">
          <h2>Contact Us</h2>

          <div class="flex">
            <div id="form-container">
              <h3>Contact Form</h3>
              <form>
                <label for="name">Name</label>
                <input type="text" id="name" />

                <label for="email">Email</label>
                <input type="text" id="email" />

                <label for="subject">Subject</label>
                <input type="text" id="subject" />

                <label for="message">Message</label>
                <textarea id="message">Write your message here..</textarea>

                <button class="rounded">Send Message</button>
              </form>
            </div>

            <div id="address-container">
              <label>Address</label>
              <address>
                20377 Evergreen Terrace Mountain View, California, USA
              </address>

              <label>Phone</label>
              <a href="#">232-232-2323</a>

              <label>Email Address</label>
              <a href="#">ouremail@domain.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
