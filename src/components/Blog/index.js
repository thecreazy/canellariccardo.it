import React, { Component } from "react";
import Slider from "react-slick";
import "whatwg-fetch";

import config from "../../config";

import Slide from "./slide";

import articles from "./articles";

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        infinite: false,
        variableWidth: false
      }
    }
  ]
};

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: articles
    };
  }
  render() {
    const { actualSlide, isMobile, index } = this.props;
    const { lists } = this.state;
    const elements = lists.map((list, index) => (
      <div key={`element-${list.year}-${index}`}>
        <div className="section__divider">{list.year}</div>
        <ul className="slide">
          {list.articles.map((element, index) => <Slide {...element} />)}
        </ul>
      </div>
    ));

    return (
      <section id="blog">
        <div className="section__title__decorator">
          <h2 className="section__title__background">What i write</h2>
        </div>
        <div>{(() => [...elements])()}</div>
      </section>
    );
  }
}
