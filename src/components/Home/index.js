import React, { Component } from 'react';

import Circle from '../../utils/Circle';
import config from '../../config';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.settings = {
			maxRadius  : 6,
			minRadius  : 2,
			colorArray : [ '#8F9ABB', '#eef2f5', '#bc994e' ],
			bigRadius  : 2800
		};
		this.circleArray = [];
		this.initCanvas = this.initCanvas.bind(this);
		this.animateCanvas = this.animateCanvas.bind(this);
		this.lastRealPosition = 0;
	}
	componentDidMount() {
		const canvas = document.getElementById('homebackground');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		this.context = canvas.getContext('2d');
		this.canvas = canvas;
		this.contentElement = document.getElementById('___content');
		this.homecontainer = document.getElementById('homecontainer');
		window.addEventListener('resize', this.resizeCanvas);
		window.addEventListener('wheel', this.handlescrollCanvas);
		this.initCanvas(this.context);
		this.animateCanvas(this.context);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeCanvas);
		window.removeEventListener('wheel', this.handlescrollCanvas);
	}

	handlescrollCanvas = ({ deltaY = 0 }) => {
		if (this.firstCircle.radius >= this.settings.bigRadius && this.lastRealPosition >= 0) {
			this.lastRealPosition = this.updateWindowPosition(deltaY);
		} else {
			this.firstCircle.updateRadius(deltaY);
			this.updateOpacity(this.firstCircle.radius);
			this.lastRealPosition = 0;
		}
	};

	updateOpacity = (radius) => {
		let percentage = 100 * radius / this.settings.bigRadius;
		if (percentage < 0) percentage = 0;
		if (percentage > 100) percentage = 100;
		let formattedValue = 0;
		if (percentage > 0) formattedValue = percentage / 100;
		this.homecontainer.style.opacity = 1 - formattedValue;
	};

	updateWindowPosition = (delta) => {
		const actual = this.contentElement.style.transform;
		let [ x, y = '', z ] = actual.split('px');
		y = y.replace('-', '');
		y = Number(y.replace(', ', ''));
		y = y + delta >= 0 ? y + delta : 0;
		y = y > this.contentElement.clientHeight + 100 ? this.contentElement.clientHeight + 100 : y;
		this.contentElement.style.transform = `translate3d( 0px, ${-y}px, 0px )`;
		return y + delta;
	};

	resizeCanvas = () => {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.initCanvas(this.context);
	};

	initCanvas(context) {
		const { colorArray } = this.settings;
		this.circleArray = [];
		for (var i = 0; i < 100; i++) {
			const radius = Math.random() * 3 + 1;
			const x = Math.random() * (window.innerWidth - radius * 2) + radius;
			const y = Math.random() * (window.innerHeight - radius * 2) + radius;
			const dy = Math.random() - 0.5;
			const dx = Math.random() - 0.5;
			this.circleArray.push(new Circle(x, y, dx, dy, radius, colorArray, context));
		}
		this.firstCircle = this.circleArray[0];
		this.firstCircle.color = '#f7f3f0';
	}

	animateCanvas(context) {
		requestAnimationFrame(this.animateCanvas.bind(this, context));
		context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		this.circleArray.forEach((element) => {
			element.update();
		});
	}
	render() {
		return (
			<section id="home">
				<canvas className="__absolute --topleft __under" id="homebackground" />
				<div className="homecontainer __animation-opacity" id="homecontainer">
					<h1>Riccardo Canella</h1>
					<p className="homecontainer__description">
						From Italy living in Parma, where I work as a Frontend Developer at{' '}
						<a href="https://caffeina.com" target="_blank" rel="noopener noreferrer">
							Caffeina
						</a>. With a fullstack javascript background, my strength lies in websites and apps. If you want
						to know more about me, my work or if youʼre a head hunter who wants to offer me a lot of money,
						feel free to contact me on canella_riccardo[at]icloud.com.
					</p>
					<h2>ON THE ROAD DEVELOPER</h2>
					<p className="social">
						<a
							aria-label="Facebook"
							target="_blank"
							rel="noopener noreferrer"
							href={config.social.facebook}
						>
							<span className="icon-facebook" />
						</a>
						<a aria-label="Twitter" target="_blank" rel="noopener noreferrer" href={config.social.twitter}>
							<span className="icon-twitter" />
						</a>
						<a
							aria-label="Instagram"
							target="_blank"
							rel="noopener noreferrer"
							href={config.social.instagram}
						>
							<span className="icon-instagram" />
						</a>
						<a
							aria-label="Linkedin"
							target="_blank"
							rel="noopener noreferrer"
							href={config.social.linkedin}
						>
							<span className="icon-linkedin" />
						</a>
						<a aria-label="Github" target="_blank" rel="noopener noreferrer" href={config.social.github}>
							<span className="icon-github" />
						</a>
					</p>
				</div>
			</section>
		);
	}
}
