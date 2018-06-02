import React, { Component } from "react";

export default class Slide extends Component {
  render() {
    const props = this.props;
    return (
      <li>
        <a className="--list" rel="noopener" href={props.link} target="_blank">
          {props.title}
        </a>
      </li>
    );
  }
}
