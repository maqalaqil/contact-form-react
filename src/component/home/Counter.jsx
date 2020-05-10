import React, { Component } from "react";
import $ from "jquery";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      CounterArray: [
        {
          number: 40,
          text: "Home Care",
        },
        {
          number: 30,
          text: "Personal Care",
        },
        {
          number: 10,
          text: "Auto Care",
        },
      ],
    };
  }

  // newFunc() {}

  componentDidMount() {
    // console.log(this.countNum);
    if (this.countNum !== undefined) {
      console.log("Nothing to do");
    } else {
      var a = 0;
      $(window).scroll(function () {
        var y = $(".counterDiv");
        if (y.length) {
          var oTop = $(".counterDiv").offset().top - window.innerHeight;
          if (a === 0 && $(window).scrollTop() > oTop) {
            $(".counter-value").each(function () {
              var $this = $(this),
                countTo = $this.attr("data-count");
              $({
                countNum: $this.text(),
              }).animate(
                {
                  countNum: countTo,
                },

                {
                  duration: 2000,
                  easing: "swing",
                  step: function () {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                    console.log(this.countNum);
                  },
                }
              );
            });
            a = 1;
          }
        }
      });
    }
  }

  render() {
    return (
      <div className="years">
        <div className="yearsText">
          <h3>PRODUCT CAPACITY PER DAY</h3>
        </div>
        <div className="wholeYears">
          {this.state.CounterArray.map((item) => {
            return (
              <div className="singleYear">
                <div className="counterDiv">
                  <span class="counter-value" data-count={item.number}></span>
                  <span> MT</span>
                  <h3>{item.text}</h3>
                </div>
                <div className="borderRight"></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
