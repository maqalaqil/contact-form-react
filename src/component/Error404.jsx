import React, { Component } from "react";
import Turbine from "../media/logo/404.png";
import { Link } from "react-router-dom";

export class Error404 extends Component {
  componentDidMount() {
    this.scrollTop();
  }

  scrollTop() {
    // this method just scrolls the page back to the top smoothly.
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="_404Error">
        <div className="_404">
          <h1>4</h1>
          <img src={Turbine} alt="" />
          <h1>4</h1>
        </div>
        <div className="oops">
          <p>This page doesn't exist...</p>
          <Link to={{ pathname: "/" }}>
            <button onClick={this.scrollTop}>Go Back To Home Page</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Error404;
