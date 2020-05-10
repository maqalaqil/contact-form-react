import React, { Component } from "react";
import headImg from "../../media/Products/products.svg"

export default class OtherProducts extends Component {

  render() {
    return (
      <div className="otherProducts">
        <div className="heading">
          {/* <h1>OUR FAMILY PRODUCTS</h1> */}
          <div className="borderBottom"></div>
        </div>
        <div className="preImage">
          <img
            src={headImg}
            alt=""
          />
        </div>



        <div className="wholeOtherReverse">
          <div style={{ display: 'flex' }}>
            <div style={{ paddingRight: "1em" }}>
              <h3 style={{ color: "#169db1", paddingLeft: '1em' }}>General Purpose Cleaners & Detergents</h3>
              <div className="singleOtherBig">
                <ul>
                  <li>Bleach</li>
                  <li>Furnishings Freshener</li>
                  <li>Liquid Detergents</li>
                  <li>Glass and Surface cleaner</li>
                </ul>
                <ul>
                  {/* <h3 style={{ visibility: "hidden" }}>a</h3> */}
                  <li>Multi-Function Cleaner</li>
                  <li>Powder Detergent</li>
                  <li>Flash (Hydrochloric Acid)</li>
                  <li>Harpic</li>
                </ul>
              </div>
            </div>
            <div className="borderRight" style={styles}></div>
          </div>

          <div>
            <h3 style={{ color: "#169db1", paddingLeft: '1em' }}>Floor and Carpet Care Products</h3>
            <div className="singleOther">
              <ul>
                <li>Carpet and Curtain Shampoo</li>
                <li>Furnishings Freshener</li>
                <li>Liquid Detergents</li>
                <li>Glass and Surface cleaner</li>
              </ul>
              <div className="borderRight" style={styles}></div>
            </div>
          </div>

        </div>


        <div className="wholeOther">

          <div style={{ display: 'flex' }}>
            <div style={{ paddingRight: "2em" }}>
              <h3 style={{ color: "#169db1", paddingLeft: '1em' }}>Kitchen Care Products</h3>
              <div className="singleOther1">
                <ul>
                  <li> Dish wash</li>
                  <li>Fruits and Vegetables wash</li>
                  <li>Oven Cleaner</li>
                </ul>
              </div>
            </div>
            <div className="borderRight" style={styles}></div>

          </div>


          <div style={{ display: 'flex' }}>
            <div style={{ paddingRight: "2em" }}>
              <h3 style={{ color: "#169db1", paddingLeft: '1em' }}>Laundry Care Products</h3>
              <div className="singleOther1">
                <ul>
                  <li>Abaya Shampoo</li>
                  <li>Fabric Softener</li>
                  <li>White clothes detergent</li>
                </ul>
              </div>
            </div>
            <div className="borderRight" style={styles}></div>

          </div>


          <div style={{ display: 'flex' }}>
            <div style={{ paddingRight: "1em" }}>
              <h3 style={{ color: "#169db1", paddingLeft: '1em' }}>Disinfectants</h3>
              <div className="singleOther">
                <ul>
                  <li>Antiseptic disinfectant</li>
                  <li>Air Freshener</li>
                  <li>Surface disinfectant</li>
                </ul>
              </div>
            </div>
            {/* <div className="borderRight" style={styles}></div> */}

          </div>

        </div>

        <div className="wholeOtherReverse">
          <div style={{ display: 'flex' }}>
            <div style={{ paddingRight: "1em" }}>
              <h3 style={{ color: "#169db1", paddingLeft: '1em' }}>Pesonal Care Products</h3>
              <div className="singleOtherBig">
                <ul>
                  <li>Hand wash</li>
                  <li>Hand Sanitizer Gel</li>
                  <li>Hair Shampoo Antidandruff</li>
                  <li>Hair Conditioner</li>
                  <li>Hair Shampoo for Saloon</li>
                </ul>
                <ul>
                  {/* <h3 style={{ visibility: "hidden" }}>a</h3> */}
                  <li>Hair Conditioner for Saloon</li>
                  <li>Hair Gel</li>
                  <li>Shaving Gel</li>
                  <li>Shower Gel</li>
                </ul>
              </div>
            </div>
            <div className="borderRight" style={styles}></div>
          </div>


          <div style={{ display: 'flex' }}>
            <div style={{ paddingRight: "2em" }}>
              <h3 style={{ color: "#169db1", paddingLeft: '1em' }}>Car Care Products</h3>
              <div className="singleOther1">
                <ul>
                  <li>Car Shampoo</li>
                  <li>Tire Polish</li>
                </ul>
              </div>
            </div>
            {/* <div className="borderRight" style={styles}></div> */}

          </div>

        </div>

      </div>



    );
  }
}

const styles = {
  borderRightColor: "#169db1",
  height: "16vh",
};
