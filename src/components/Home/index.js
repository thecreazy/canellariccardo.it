import React, { Component } from "react";

import Circle from "../../utils/Circle";
import config from "../../config";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      maxRadius: 6,
      minRadius: 2,
      colorArray: ["#404040", "#eef2f5"]
    };
    this.circleArray = [];
    this.initCanvas = this.initCanvas.bind(this);
    this.animateCanvas = this.animateCanvas.bind(this);
  }
  componentDidMount() {
    const canvas = document.getElementById("homebackground");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    const { maxRadius, minRadius } = this.settings;
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.initCanvas(context);
    });
    this.initCanvas(context);
    this.animateCanvas(context);
  }
  initCanvas(context) {
    const { colorArray } = this.settings;
    this.circleArray = [];
    for (var i = 0; i < 100; i++) {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * (innerWidth - radius * 2) + radius;
      const y = Math.random() * (innerHeight - radius * 2) + radius;
      const dy = Math.random() - 0.5;
      const dx = Math.random() - 0.5;
      this.circleArray.push(
        new Circle(x, y, dx, dy, radius, colorArray, context)
      );
    }
  }
  animateCanvas(context) {
    requestAnimationFrame(this.animateCanvas.bind(this, context));
    context.clearRect(0, 0, innerWidth, innerHeight);
    this.circleArray.forEach(element => {
      element.update();
    });
  }
  render() {
    return (
      <section id="home">
        <canvas className="__absolute --topleft __under" id="homebackground" />
        <h1>Riccardo Canella</h1>
        <p className="__fulltwo-tre __mobile-full">
          From Italy living in Parma, where I work as a Frontend Developer at{" "}
          <a href="https://caffeina.com" target="_blank" rel="noopener">
            Caffeina
          </a>. With a fullstack javascript background, my strength lies in
          websites and apps. If you want to know more about me, my work or if
          youʼre a head hunter who wants to offer me a lot of money, feel free
          to contact me on canella_riccardo[at]icloud.com.
        </p>
        <h2>ON THE ROAD DEVELOPER</h2>
        <p className="social">
          <a target="_blank" rel="noopener" href={config.social.facebook}>
            <span className="icon-facebook" />
          </a>
          <a target="_blank" rel="noopener" href={config.social.twitter}>
            <span className="icon-twitter" />
          </a>
          <a target="_blank" rel="noopener" href={config.social.instagram}>
            <span className="icon-instagram" />
          </a>
          <a target="_blank" rel="noopener" href={config.social.linkedin}>
            <span className="icon-linkedin" />
          </a>
          <a target="_blank" rel="noopener" href={config.social.github}>
            <span className="icon-github" />
          </a>
        </p>
      </section>
    );
  }
}
