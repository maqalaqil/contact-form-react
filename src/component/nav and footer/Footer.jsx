import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

// change footer to a stateless component
export class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <div className="footerAddress">
          <Link to="/" exact="true">
            <img id="footerLogo" src="" alt="logo" />
          </Link>
        </div> */}

        <ul className="footerLinks">
          <div className="footerInner1">
            <a href="mailto:info@ddcif.com">
              <div class="Icon mail"></div>
              <li>
                {/* <Link to="/">Home</Link> */}
                info@ddcif.com
              </li>
            </a>

            <a href="#">
              <div class="Icon phone"></div>
              <li>
                {/* <Link to="/">Home</Link> */}
                +971 6 533 7373
              </li>
            </a>
          </div>

          <div className="footerInner2">
            <a>
              <div class="Icon location"></div>
              <li>
                {/* <Link to="/">Home</Link> */}
                T5-033, SAIF ZONE, Sharjah - UAE
              </li>
            </a>
            <a>
              <div class="Icon mailBox"></div>
              <li>
                {/* <Link to="/">Home</Link> */}
                P.O.BOX : 9100
              </li>
            </a>
          </div>
        </ul>
        <ul className="copyrights">
          <Link to="/privacyPolicy/">
            <li>Privacy Policy</li>
          </Link>
          <Link to="/termsAndConditions/">
            <li>Terms and Conditions</li>
          </Link>
          <a href="">
            <li>
              © {new Date().getFullYear()} Made with &#10084; by{" "}
              <a
                href=""
                style={{
                  color: "rgb(243, 77, 60)",
                  padding: "0",
                  margin: "0",
                  fontSize: "1em",
                }}
              >
                KoalaTeam
              </a>{" "}
              in{" "}
              <a
                href="https://blackgem.net/"
                target="_blank"
                style={{
                  color: "rgb(243, 77, 60)",
                  padding: "0",
                  margin: "0",
                  fontSize: "1em",
                }}
              >
                BlackGem
              </a>{" "}
              - All Rights Reserved
            </li>
          </a>
        </ul>
      </footer>
    );
  }
}

export default Footer;
