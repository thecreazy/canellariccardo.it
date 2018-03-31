import React, { Component } from "react";
import "whatwg-fetch";

import config from "../../config";

import Pic from "./pic";

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: []
    };
  }
  componentWillMount() {
    fetch(config.picsApi)
      .then(response => response.json())
      .then(data => this.setState({ pics: data }));
  }
  render() {
    return (
      <section id="photos" className="--column">
        {this.state.pics.map((pic, index) => (
          <Pic {...pic} key={`pic--${index}`} />
        ))}
      </section>
    );
  }
}
