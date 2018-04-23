import React, { Component } from "react";

export default class Pic extends Component {
  render() {
    const props = this.props;
    return (
      <a
        target="_blank"
        className={props.showPic ? "pic" : "pic --hide"}
        href=""
      >
        <img
          className="pic_img"
          alt={props.text}
          src={props.showPic ? props.images.standard_resolution.url : ""}
        />
      </a>
    );
  }
}
