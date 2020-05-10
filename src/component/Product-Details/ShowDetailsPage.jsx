import React from "react";
import facebook from "../../media/SocialMedia/facebook.svg";
import twitter from "../../media/SocialMedia/twitter.svg";
import Arrow from "../../media/arrows/left-arrow.svg";
import { Link } from "react-router-dom";

//match is a router props passed from Products

class ShowDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Index: this.props.hello - 1,
      articles: this.props.articles,
      description: "Description:",
      directions: "Directions:",
      caution: "Caution:",
      ingredients: "Ingredients:",
      safetyWarning: "Safety Warnings:",
    };
  }

  componentDidMount() {
    this.scrollToTop();
    console.log("props hello", this.props.hello);
  }
  scrollToTop() {
    // this method just scrolls the page back to the top smoothly.
    window.scrollTo(0, 0);
  }

  nextSlide = () => {
    this.scrollToTop();
    // nextbtn function > compares the index state with the array length  to incress the value of the index or reset it to equal the first id in the array

    if (this.state.Index + 2 <= this.state.articles.length) {
      this.setState({ Index: this.state.Index + 1 });
    } else {
      this.setState({ Index: 0 });
    }
  };

  NextStoryBtn = (props = {}) => {
    let newIndex1 = this.state.Index + 2;

    if (newIndex1 <= this.state.articles.length) {
      newIndex1 = this.state.Index + 2;
    } else if (newIndex1 > this.state.articles.length) {
      newIndex1 = 1;
    }

    return (
      <Link
        {...props}
        onClick={this.nextSlide}
        key={""}
        to={`/products/${newIndex1}`}
      >
        Next <img className="articleRightArrow" src={Arrow} alt="" />
      </Link>
    );
  };

  prevSlide = () => {
    if (this.state.Index === 0) {
      this.setState({ Index: this.state.articles.length - 1 });
    } else {
      this.setState({ Index: this.state.Index - 1 });
    }
  };

  BackBtn = (props = {}) => {
    let newIndex2 = this.state.Index;

    if (newIndex2 === 0) {
      newIndex2 = this.state.articles.length;
    }

    return (
      <Link
        {...props}
        onClick={this.prevSlide}
        key={""}
        to={`/products/${newIndex2}`}
      >
        <img className="articleLeftArrow" src={Arrow} alt="" />
        Previous
      </Link>
    );
  };

  render() {
    return (
      <div>
        <div className="articlePage">
          {/* Mobile Version Buttons Top of page */}
          <div className="articleBtnsMobileUp">
            <this.BackBtn className="backBtnUp" />
            <this.NextStoryBtn className="nextBtnUp" />
          </div>

          {/* End Mobile Version Buttons Top of page */}

          <div className="articleWrapper">
            <div className="article">
              <div className="articleHeader">
                <h1>{this.state.articles[this.state.Index].title}</h1>

                <div className="singleDiv">
                  <div className="detailDiv">
                    <p>{this.state.description}</p>
                  </div>
                  <p>{this.state.articles[this.state.Index].description}</p>
                </div>

                <div className="singleDiv">
                  <div className="detailDiv">
                    <p>{this.state.directions}</p>
                  </div>
                  <p>{this.state.articles[this.state.Index].directions}</p>
                </div>

                <div className="singleDiv">
                  <div className="detailDiv">
                    <p>{this.state.caution}</p>
                  </div>
                  <p>{this.state.articles[this.state.Index].caution}</p>
                </div>

                <div className="singleDiv">
                  <div className="detailDiv">
                    <p>{this.state.ingredients}</p>
                  </div>
                  <p>{this.state.articles[this.state.Index].ingredients}</p>
                </div>

                <div className="singleDiv">
                  <div className="detailDiv">
                    <p>{this.state.safetyWarning}</p>
                  </div>
                  <p>{this.state.articles[this.state.Index].safetyWarning}</p>
                </div>

                <a href={this.state.articles[this.state.Index].social.tw}>
                  <img
                    className="articleSocialIcon"
                    src={twitter}
                    alt="twitter_icon"
                  />
                </a>
                <a href={this.state.articles[this.state.Index].social.fa}>
                  <img
                    className="articleSocialIcon"
                    src={facebook}
                    alt="facebook_icon"
                  />
                </a>
                <Link to="/otherProducts/" className="morebtnDisc">
                  MORE PRODUCTS
                </Link>
              </div>

              <div
                className="articleImg"
                style={{
                  backgroundImage: `url(${
                    this.state.articles[this.state.Index].img
                  })`,
                }}
              ></div>
            </div>
          </div>
          {/* <div className="articleParagraph">
            <p>{this.state.articles[this.state.Index].article}</p>
          </div> */}

          <div className="BackNextBtn">
            {/* Previous Story big screen */}
            <this.BackBtn className="backBtn" />
            {/* Next Story big screen */}
            <this.NextStoryBtn className="nextBtn" />
          </div>

          {/* Mobile Version Buttons Bottom of page */}

          <div className="articleBtnsMobileDown">
            <this.BackBtn className="backBtnDown" />
            <this.NextStoryBtn className="nextBtnDown" />
          </div>
          {/* End Mobile Version Buttons Bottom of page */}
        </div>
      </div>
    );
  }
}

export default ShowDetailsPage;

// show article here - design and all
