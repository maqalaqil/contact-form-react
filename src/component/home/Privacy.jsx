import React, { Component } from "react";
import privacyArray from "../arrays/privacyParagraphs";

export default class Privacy extends Component {
  componentDidMount() {
    this.scrollTop();
  }

  scrollTop() {
    // this method just scrolls the page back to the top smoothly.
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="privacy">
        <div className="headingLeftCopyrights">
          <h1>PRIVACY POLICY</h1>
          <div className="borderBottom"></div>
        </div>
        <div className="wholePrivacy">
          {/* <h3>GENERAL</h3> */}
          {privacyArray.map(item => {
            return <p>{item.para}</p>;
          })}
        </div>
      </div>
    );
  }
}
