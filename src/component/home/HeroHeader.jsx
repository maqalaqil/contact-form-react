import React, { Component } from "react";
import Video from "../../media/video/dcc_2~1.webm";
import downArrow from "../../media/arrows/thin-arrowheads.png";
import { HashLink as Link } from "react-router-hash-link";

export default class HeroHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: Video,
    };
  }
  render() {
    return (
      <div class="wrapper11" id="home">
        <video
          preload="auto"
          loop
          autoplay=""
          muted
          playsinline=""
          poster="/assets/poster.png"
          tabindex="-1"
        >
          <source src={this.state.videoURL} type="video/webm" />
        </video>

        <div className="thisTitle">
          <h1>D.D.C International Factory</h1>{" "}
          <div id="downButton" className="downButton">
            <Link to="/#services">
              <img src={downArrow} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <video autoplay loop muted class="wrapper__video">
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video> */
}
