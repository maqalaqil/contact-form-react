import React, { Component } from "react";
import termsArray from "../arrays/termsParagraphs";

export default class Terms extends Component {
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
      <div className="terms">
        <div className="headingLeftCopyrights">
          <h1>TERMS & CONDITIONS</h1>
          <div className="borderBottom"></div>
        </div>
        <div className="wholeTerms">
          <h3>IMPORTANT LEGAL NOTICE</h3>
          {termsArray.map(item => {
            return <p>{item.para}</p>;
          })}
        </div>
      </div>
    );
  }
}
