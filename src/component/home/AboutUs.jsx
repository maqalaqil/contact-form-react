import React, { Component } from "react";
//
export default class AboutUs extends Component {
  render() {
    return (
      <div id="about" className="homeContactUs about">
        <div className="homecontactDiv">
          {/* <ContactUS page="contactHome" /> */}
          <div className="headingLeft">
            <h1>ABOUT</h1>
            <div className="borderBottom"></div>
          </div>
          <div className="aboutText">
            <p>
              D.D.C International Factory F.Z.C, a Cleaning & Industrial Chemical
              Manufacturer, is involved in both Manufacturing and Trading
              activities.
              <br />
              We are the largest manufacturers of hygiene products in the U.A.E.{" "}
              <br /> 
              High quality products are being manufactured in our Saif Zone
              Sharjah facility and being delivered to United Arab Emirates local
              market as well as exported worldwide catering to different
              industries in GCC and Africa.
              <br />
              “D.D.C International Factory F.Z.C is recognized as one of the
              leading Manufacturers of Cleaning Chemicals in the UAE | GCC |
              MIDDLEAST”
              <br />
              <br />
            </p>
          </div>
        </div>

        <div className="homeContacUsImg">
          {/* Changing the home page image in contact us section */}
        </div>
      </div>
    );
  }
}
