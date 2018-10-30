import React, { Component, Fragment } from 'react';
import Loggo from 'common-loggo';

import Layout from '../layouts';

import Home from '../components/Home';
import Blog from '../components/Blog';
import Lab from '../components/Lab';
import Photos from '../components/Photos';

require('intersection-observer');
export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			actualSlide : 0,
			active      : {
				actualSlide       : 0,
				horizontalSlider1 : 0
			}
		};
		Loggo.init({
			rock : {
				label      : '🤟',
				color      : 'black',
				background : 'white'
			}
		});
	}

	componentDidMount() {
		this.observer = new IntersectionObserver(this.onIntersection, {});
		const startValues = document.querySelectorAll('.animate');
		startValues.forEach((element) => {
			this.observer.observe(element);
		});
		Loggo.rock('Hi guys!');
		Loggo.rock('Thx to visit my website');
	}

	componentWillUnmount() {
		this.observer = null;
	}

	onIntersection = (changes) => {
		changes.forEach((change) => {
			if (!!change.isIntersecting) {
				change.target.classList.add('--start');
				this.observer.unobserve(change.target);
			}
		});
	};

	render() {
		const partials = [ Lab, Blog, Photos ];
		const { actualSlide } = this.state;
		return (
			<Layout>
				<Fragment>
					<Home />
					<div id="___content">
						{partials.map((Element, index) => (
							<Element
								key={`section-${index}`}
								index={index}
								actualSlide={actualSlide}
								observer={this.observer}
							/>
						))}
					</div>
				</Fragment>
			</Layout>
		);
	}
}
