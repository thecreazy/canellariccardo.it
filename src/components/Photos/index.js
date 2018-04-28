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
        <div className="information">
          <p className="information__title">Follow me</p>
          <p className="social information__social">
            <a
              aria-label="Facebook"
              target="_blank"
              rel="noopener"
              href={config.social.facebook}
            >
              <span className="icon-facebook" />
            </a>
            <a
              aria-label="Twitter"
              target="_blank"
              rel="noopener"
              href={config.social.twitter}
            >
              <span className="icon-twitter" />
            </a>
            <a
              aria-label="Instagram"
              target="_blank"
              rel="noopener"
              href={config.social.instagram}
            >
              <span className="icon-instagram" />
            </a>
            <a
              aria-label="Linkedin"
              target="_blank"
              rel="noopener"
              href={config.social.linkedin}
            >
              <span className="icon-linkedin" />
            </a>
            <a
              aria-label="Github"
              target="_blank"
              rel="noopener"
              href={config.social.github}
            >
              <span className="icon-github" />
            </a>
          </p>
          <p className="information__description">
            The camera is an instrument that teaches people how to see without a
            camera.
          </p>
          <p className="information__link">
            <a rel="noopener" href={config.social.flickr} target="_blank">
              Check out my last pics on Flickr
            </a>
          </p>
        </div>
        {this.state.pics.map((pic, index) => (
          <Pic
            {...pic}
            link={config.social.instagram}
            showPic={showImages}
            key={`pic--${index}`}
          />
        ))}
      </section>
    );
  }
}
