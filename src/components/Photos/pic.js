import React, { Component } from "react";

export default class Pic extends Component {
  render() {
    const props = this.props;
    return (
      <a target="_blank" className="pic" href="">
        <img className="pic_img" src={props.images.standard_resolution.url} />
      </a>
    );
  }
}
