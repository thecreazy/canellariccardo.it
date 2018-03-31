import React, { Component } from "react";
import { Fullpage, HorizontalSlider, Slide } from "fullpage-react";
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;

import Home from "../components/Home";
import Blog from "../components/Blog";
import Lab from "../components/Lab";
import Photos from "../components/Photos";

const fullPageOptions = {
  scrollSensitivity: 2,
  touchSensitivity: 2,
  scrollSpeed: 300,
  resetSlides: true,
  hideScrollBars: true,
  enableArrowKeys: true,
  activeSlide: 0
};

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    fullPageOptions.slides = [
      <Slide>
        <Home />
      </Slide>,
      <Slide>
        <Blog />
      </Slide>,
      <Slide>
        <Lab />
      </Slide>,
      <Slide>
        <Photos />
      </Slide>
    ];
    if (false) {
      return (
        <div>
          <Home />
          <Blog />
          <Lab />
          <Photos />
        </div>
      );
    } else {
      return (
        <Fullpage
          onSlideChangeStart={this.onSlideChangeStart}
          onSlideChangeEnd={this.onSlideChangeEnd}
          {...fullPageOptions}
        />
      );
    }
  }
}
