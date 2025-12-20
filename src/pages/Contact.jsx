import React from "react";
import "../style/contact/_contact.scss";
import Navbar from "../components/Navbar";
import { IoCloudDownload } from "react-icons/io5";

export default function Contact() {
  return (
    <main className="mainOfContact">
      <Navbar />
      <h1>LET’S ANSWER YOUR QUERIES</h1>
      <div className="mainOfInputs">
        <div className="inputs">
          <div>
            <p>Full Name</p>
            <input type="text" />
          </div>
          <div>
            <p>Email-address</p>
            <input type="email" name="" id="" />
          </div>
          <div>
            <p>mobileNumber</p>
            <input type="tel" name="" id="" />
          </div>
        </div>
        <div className="inputs">
          <p>Ask here</p>
          <div>
            <input type="text" />
          </div>
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="mainPartTwo">
        <div>
          <img
            src="Left_Hand_Holding_Smartphone_Mockup-transformed 1.png"
            alt=""
          />
        </div>
        <div>
          <h1>
            <span>Download</span>
            The App
            <IoCloudDownload />
          </h1>
        </div>
      </div>
    </main>
  );
}
