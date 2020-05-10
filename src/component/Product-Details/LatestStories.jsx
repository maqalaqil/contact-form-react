import React from "react";
import { Link } from "react-router-dom";
import ProductArray from "./ProductArray";
import $ from "jquery";

class LatestStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: ProductArray,
      displayNum: "4",
      count: 2,
      by: "by ",
      source: "Source: ",
    };
  }

  showMore = () => {
    this.setState({ displayNum: this.state.count * 4 });

    if (this.state.displayNum >= this.state.articles.length) {
      // alert("There are no more products to display!");
      $(".morebtn").each(function () {
        $(this).replaceWith(
          $(
            "<a href='/otherProducts/'><button class='morebtn'>" +
              "CHECK FOR MORE PRODUCTS" +
              "</button></a>"
          )
        );
      });
    }
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  RenderArticles = () => {
    return (
      <div className="lastestStory">
        {this.state.articles
          .filter((story) => story.id <= this.state.displayNum)
          .map((story) => {
            return (
              <Link
                className="storyLink"
                onClick={this.props.handleId}
                key={story.id}
                to={`/products/${story.id}`}
              >
                <div>
                  <div className="story">
                    <div
                      className="storyimg"
                      style={{
                        backgroundImage: `url(${
                          this.state.articles[story.id - 1].img
                        })`,
                      }}
                    ></div>
                    <h3>{this.state.articles[story.id - 1].title}</h3>
                    {/* <h2>
                      {this.state.by}
                      {this.state.articles[story.id - 1].by}
                    </h2>
                    <h2>
                      {this.state.source}
                      {this.state.articles[story.id - 1].source}
                    </h2> */}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    );
  };

  render() {
    return (
      <div className="latestStorySection">
        <div className="latestStorieshead1">
          <div className="heading">
            <h1>PRODUCTS</h1>
            <div className="borderBottom"></div>
          </div>

          <div className="latestStories">
            <this.RenderArticles />
          </div>

          <button className="morebtn" onClick={this.showMore}>
            MORE
          </button>
        </div>
        {/* <Route path={`/:storyID`} render={routerProps => <ArticleShow id={this.state.index} />} /> */}
      </div>
    );
  }
}

export default LatestStories;
