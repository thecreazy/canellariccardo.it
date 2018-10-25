import React, { Component } from "react";
import "whatwg-fetch";

import Slide from "./slide";

import articles from "./articles";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: articles
    };
  }
  render() {
    const { lists } = this.state;
    const elements = lists.map((list, index) => (
      <div key={`element-${list.year}-${index}`}>
        <div className="section__divider">{list.year}</div>
        <ul className="slide">
          {list.articles.map((element, index) => <Slide key={`article-${index}`} {...element} />)}
        </ul>
      </div>
    ));

    return (
      <section id="blog">
      <div className="section__title__decorator">
        <h2  className="section__title__background">What i write</h2>
      </div>
        <div>{(() => [...elements])()}</div>
      </section>
    );
  }
}
