import React, { Component } from "react";
import Customer from "../../media/Services/customer_service__png.jpg";
import Eco from "../../media/Services/pngwing.com (1).png";
import Chemist from "../../media/Services/homepage-buckets-researcher-testtubes.jpg";

class Services extends Component {
  state = {
    servicesCards: [
      {
        src: Customer,
        title: "Customer Care",
        paragraph: `We give top most priority to our customers and thus endeavor 
        to offer the highest level of satisfaction to them.`,
      },
      {
        src: Eco,
        title: "Eco-friendly",
        paragraph: `We always go for the quality of the product rather than going for its quantity. Being environment friendly,
         our products meet both environmental regulations as well as increasing ecologically aware customers.`,
      },
      {
        src: Chemist,
        title: "Latest Market Requirements",
        paragraph: `Highly qualified professionals and quality experts associated with us are the most integral part of the company,
         who enable us to keep pace with the latest market requirements.`,
      },
    ],
  };
  render() {
    return (
      <div id="services">
        <div className="services">
          <div className="heading">
            <h1>SERVICES</h1>
            <div className="borderBottom"></div>
          </div>

          <div className="wholeServices">
            {this.state.servicesCards.map((item) => {
              return (
                <div className="singleService">
                  <div className="serviceImg">
                    <img src={item.src} alt="" />
                  </div>
                  <div className="serviceText">
                    <h3>{item.title}</h3>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="contactUs"></div>
        </div>
      </div>
    );
  }
}

export default Services;
