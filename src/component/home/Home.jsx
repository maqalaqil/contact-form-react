import React, { Component } from "react";
import HeroHeader from "./HeroHeader";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Counter from "./Counter";
import Contact from "./Contact";
import Clients from "./Clients";
import Products from "./Products";

export class Home extends Component {
  render() {
    return (
      <div >
        <HeroHeader />

        <Services />

        <AboutUs />

        <Counter />

        <Products />

        <Clients />

        <Contact />
      </div>
    );
  }
}

export default Home;
