import React, { Component } from "react";
import Nav from "./components/navLinks/nav.js";
import Alert from "./components/alert/alert.js";
import SectionOne from "./components/sectionOne/sectionOne.js";
import SectionTwo from "./components/sectionTwo/sectionTwo.js";
import SectionThree from "./components/sectionThree/sectionThree.js";
import SectionFour from "./components/sectionFour/sectionFour.js";
import SectionFive from "./components/sectionFive/sectionFive.js";
import SectionSix from "./components/sectionSix/sectionSix.js";
import Footer from "./components/footer/footer.js";
import "./resources/css/styles.css";

// import "./resources/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Alert />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </div>
    );
  }
}
