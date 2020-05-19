import React, { Component } from "react";
import Slider from "react-slick";

import { ReactComponent as QuoteL } from "./quotes-l.svg";
import { ReactComponent as QuoteR } from "./quotes-r.svg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide">
            <div className="slideContainer">
              <div className="featured-img"></div>
              <div className="featured-copyWrapper">
                <div className="featured-blurbWrapper">
                  <QuoteL className="quoteL" />
                  <p className="featured-blurb">
                    1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <QuoteR className="quoteR" />
                </div>
                <div className="featured-info">
                  <h4>Artist Name</h4>
                  <p>City</p>
                  <p>Social links</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slideContainer">
              <div className="featured-img"></div>
              <div className="featured-copyWrapper">
                <div className="featured-blurbWrapper">
                  <QuoteL className="quoteL" />
                  <p className="featured-blurb">
                    2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <QuoteR className="quoteR" />
                </div>
                <div className="featured-info">
                  <h4>Artist Name</h4>
                  <p>City</p>
                  <p>Social links</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
          <div className="slideContainer">
            <div className="featured-img"></div>
            <div className="featured-copyWrapper">
              <div className="featured-blurbWrapper">
                <QuoteL className="quoteL" />
                <p className="featured-blurb">
                  3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <QuoteR className="quoteR" />
              </div>
              <div className="featured-info">
                <h4>Artist Name</h4>
                <p>City</p>
                <p>Social links</p>
              </div>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    );
  }
}
