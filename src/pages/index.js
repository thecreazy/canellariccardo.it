import React, { Component }  from 'react';
import { Fullpage, HorizontalSlider, Slide } from 'fullpage-react';
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;

import Home from "../components/Home";
import Blog from "../components/Blog";

const fullPageOptions = {
  scrollSensitivity: 7,
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

  onSlideChangeStart(name, props, state, newState) {
  }

  onSlideChangeEnd(name, props, state, newState) {
    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide
    };
    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }

  render() {
    const { active } = this.state;
    const currentActive = active.Fullpage;
    fullPageOptions.slides = [
      <Slide><Home /></Slide>,
      <Slide><Blog /></Slide>
    ];
    return (
      <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
      </Fullpage>
    );
  }
}