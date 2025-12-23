import React from "react";
import "../style/homePage/_homePage.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="mainOfHomePage">
      <Navbar />

      <section className="main">
        <h1>Welcome to Food Dynasty</h1>
      </section>

      <Footer />
    </main>
  );
}
