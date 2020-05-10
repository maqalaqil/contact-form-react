import React, { Component } from "react";
import Client1 from '../../media/clients-logo/adnoc-fixed.png'
import Client2 from "../../media/clients-logo/amlogo2.png";
import Client3 from "../../media/clients-logo/dubai-gov-logo-fixed.png";
import Client4 from "../../media/clients-logo/shariqa-fixed.png";
import Client5 from "../../media/clients-logo/emirates-fixed.png";

class Clients extends Component {
  state = {
    clientsImg: [
      {
        src: Client1,
      },
      {
        src: Client2,
      },
      {
        src: Client3,
      },
      {
        src: Client4,
      },
      {
        src: Client5,
      }
    ]
  };
  render() {
    return (
      <div className="clients">
        <div className="heading">
          <h1>CLIENTS</h1>
          <div className="borderBottom"></div>
        </div>
        <div className="wholeClients">
          {this.state.clientsImg.map(item => {
            return (
              <div className="singleClient">
                <img src={item.src} alt="client-logo"></img> 
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Clients;
