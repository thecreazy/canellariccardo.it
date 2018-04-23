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
              href={props.link}
              target="_blank"
              rel="noopener"
            >
              {props.title}
            </a>
          </span>
        </div>
      </div>
    );
  }
}
