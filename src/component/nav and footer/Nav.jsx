import React, { Component } from "react";
// import Logo from "../images/navAndFooter/Renewables_transparent Logo_side.png";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../media/logo/ddcLogo.jpg";

export class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav id="nav" className="transform">
            <div id="flex2">
              <div>
                <Link to="/" exact="true">
                  <img id="navLogo" src={Logo} alt="logo" />
                </Link>
              </div>

              <div>
                <ul className="navLinks">
                  <li className="homeLink">
                    <Link to="/#home">
                      <p className="Linehome">Home</p>
                    </Link>{" "}
                  </li>

                  <li className="servicesLink">
                    <Link to="/#services">
                      {" "}
                      <p className="Lineservices">Services</p>
                    </Link>
                  </li>

                  <li className="aboutLink">
                    <Link to="/#contactUs">
                      <p className="Lineabout">About</p>
                    </Link>{" "}
                  </li>

                  <li className="projectsLink">
                    <Link to="/#product">
                      {" "}
                      <p className="Lineprojects">Products</p>
                    </Link>
                  </li>

                  <li className="contactLink">
                    <Link to="/#contact">
                      {" "}
                      <p className="Linecontact">Contact</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* nav hanburger menu  */}

              <div id="navMenuIcon">
                <span id="lineTop"></span>
                <span id="lineMiddle"></span>
                <span id="lineBottom"></span>
              </div>
            </div>

            <div id="navDropMenu1" className="transform">
              <ul className="navDropUl">
                <Link to="/">
                  <li className="homeLink">Home</li>
                </Link>{" "}
                <Link to="/#services">
                  <li className="servicesLink">Services</li>
                </Link>
                <Link to="/#about">
                  <li className="aboutLink">About</li>
                </Link>{" "}
                <Link to="/#product">
                  <li className="projectsLink">Products</li>
                </Link>
                <Link to="/#contact">
                  <li className="contactLink"> Contact </li>
                </Link>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
