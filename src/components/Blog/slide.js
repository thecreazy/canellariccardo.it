import React, { Component } from "react";

export default class Slide extends Component {
  render() {
    const props = this.props;
    return (
      <div
        className="slide"
        style={{
          backgroundImage: props.showImages ? `url(${props.image})` : "",
          opacity: props.showImages ? 1 : 0
        }}
      >
        <div className="slide__overlay">
          <span className="slide__overlay__span">
            <a
              className="--noeffect"
              rel="noopener"
              href={props.link}
              target="_blank"
            >
              {props.title}
            </a>
          </span>
        </div>
      </div>
    );
  }
}
