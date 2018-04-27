import React, { Component } from "react";
import { Fullpage, HorizontalSlider, Slide } from "fullpage-react";

import Home from "../components/Home";
import Blog from "../components/Blog";
import Lab from "../components/Lab";
import Photos from "../components/Photos";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fullpage: 0,
      active: {
        Fullpage: 0,
        horizontalSlider1: 0
      }
    };
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {}

  onSlideChangeEnd(name, props, state, newState) {
    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide
    };
    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }


  componentDidMount() {
    const { isMobile } = this.state;
    if (window) {
      const _height = window.innerHeight;
      window.addEventListener("scroll", () => {
        const scrollTop =
          window.pageYOffset ||
          (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
        if (scrollTop >= _height / 3) this.setState({ Fullpage: 1 });
        if (scrollTop >= _height)
          this.setState({ Fullpage: 2 });
      });
    }
  }

  render() {
    const partials = [Home, Blog, Photos];
    const { isMobile } = this.state;
    const slideNumber = this.state.Fullpage;
    return (
      <div>
        {partials.map((Element, index) => (
          <Element
            key={`section-${index}`}
            index={index}
            isMobile={isMobile}
            actualSlide={slideNumber}
          />
        ))}
      </div>
    );
  }
}
