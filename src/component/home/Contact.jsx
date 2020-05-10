import React, { Component } from "react";
import ContactForm from "./ContactForm.jsx"

export default class Contact extends Component {
  //pass in page name as props, either home or contact .. and these two have different classes (style is slightly different)
  // constructor(props) {
  //   super();
  //   this.state = {
  //     page: props.page
  //   };
  // }
  render() {
    return (
      <div id='contact' className="contact">
        <div className="heading">
          <h1>CONTACT</h1>
          <div className="borderBottom"></div>
        </div>
        <div className="wholeContact">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28848.90707280686!2d55.47768893306522!3d25.333976024677998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5e36cfa2cc7%3A0x11f502f4edb88468!2sSaif%20Zone%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1585507415126!5m2!1sen!2s"
              width="1000"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>

          <div className="thisContactSection">
            <div className="contactInfo">
              <div className="contactText">
                <h2>Inquiries</h2>
                <p>
                  For any inquiries or questions please call us:
                  <br />
                  +971 6 533 7373 or fill out the following form
                </p>
              </div>

              <div className="contactForm">
                <h2>Contact Us</h2>
                <ContactForm/>
              </div>
            </div>

            <div className="contactInfo2">
              <div className="contactText">
                <h2>Head Office</h2>
                <p>T5-033, SAIF Zone, Sharjah – U.A.E</p>
                <p>
                  info@ddcif.com Tel: +971 6 533 7373 <br /> P.O. BOX: 9100{" "}
                </p>
              </div>
              <div className="contactText">
                <h2>Employment</h2>
                <p>
                  To apply for a job with D.D.C International Factory , please
                  send a cover letter together with your C.V. to: info@ddcif.com
                </p>
              </div>
              {/* <div className="contactText">
                <div className="borderBottom"></div>{" "}
                <div className="quote">
                  <h2>Get a quote : 123456789 </h2>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
