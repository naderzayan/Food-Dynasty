import React from "react";
import "../style/homePage/_homePage.scss";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <main className="mainOfHomePage">
      <Navbar />
      <div className="main">
        <h1>Welcome to food dynasty</h1>
        <div className="para">
          <p>Discover the world of authentic flavors! "food dynasty"</p>
          <p>Restaurant offers you an irresistible dining experience,</p>
          <p>every bite is a story of quality and taste.</p>
          <p>Charming atmosphere, exceptional service, and delicious meals.</p>
          <p>Your ideal place to relax with family and friends.</p>
          <p>
            Turn your day into a celebration! Enjoy unforgettable moments at
            "food dynasty".
          </p>
          <p>Let your senses indulge in our world.</p>
          <p>Here, every meal is a memory.</p>
          <p>
            Share delicious dishes with your loved ones in a warm atmosphere.
          </p>
          <p>Special offers not to be missed!</p>
          <p>Reserve your table now and enjoy discounts on all meals.</p>
          <p>An unforgettable night at unbelievable prices!</p>
          <p>Discover our new menu and special offers.</p>
          <p>Health and here, in every bite.</p>
          <p>Delicious food, for dear people.</p>
        </div>
      </div>
    </main>
  );
}
