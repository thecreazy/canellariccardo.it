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
    const { actualSlide, isMobile, index } = this.props;
    let showImages = !!(actualSlide >= index);
    return (
      <section id="photos" className="--row __nopadding">
        <h3 className="section__title__background __onlymobile">What i shot</h3>
        {this.state.pics.map((pic, index) => (
          <Pic {...pic} showPic={showImages} key={`pic--${index}`} />
        ))}
      </section>
    );
  }
}
