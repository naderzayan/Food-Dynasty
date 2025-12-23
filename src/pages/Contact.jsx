import React from "react";
import "../style/contact/_contact.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="mainOfContact">
      <Navbar />

      <h1 className="contact-title">LET’S ANSWER YOUR QUERIES</h1>

      <section className="mainOfInputs">
        <div className="inputs">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
        </div>

        <div className="inputText">
          <div className="input-group">
            <label>Ask here</label>
            <textarea placeholder="Write your message..." />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
