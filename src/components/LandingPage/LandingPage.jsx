import React from "react";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Footer from "../Footer/Footer";
import Navigation from "../Navbar/Navigation";
import Product from "../Product/Product";

function LandingPage() {
  return (
    <div className="Landing-page">
      <Navigation className="Main-Navigation" />
      <Banner className="Main-Banner" />
      <Product className="Main-Product" />
      <Benefits className="Main-Benefits" />
      <Footer />
    </div>
  );
}

export default LandingPage;
