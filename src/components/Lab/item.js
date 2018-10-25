import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const props = this.props;
    return (
      <li>
        <a className="--list" rel="noopener noreferrer" href={props.link} target="_blank">
          <span className="tag">{props.name}</span> {props.description}
        </a>
      </li>
    );
  }
}
