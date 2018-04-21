import React, { Component } from "react";

export default class Slide extends Component {
  render() {
    const props = this.props;
    return (
      <div
        className="slide"
        style={{
          backgroundImage: `url(${props.image})`
        }}
      >
          <div className="slide__overlay">
         
              <span className="slide__overlay__span">
              <a className="--noeffect" href={props.link} target="_blank" rel="noopener">{props.title}
              </a></span>
             
          </div>
      </div>
    );
  }
}
