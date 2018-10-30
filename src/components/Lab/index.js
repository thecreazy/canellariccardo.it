import React, { Component } from 'react';

import projects from './project';

import Item from './item';

export default class Lab extends Component {
	state = {
		projects
	};

	render() {
		const { projects } = this.state;
		const elements = projects.map((project, index) => <Item key={`project-${index}`} {...project} />);
		return (
			<section id="lab">
				<div className="section__title__decorator animate">
					<h2 className="section__title__background">
						<span>
							<span> What i </span>
						</span>
						<span>
							<span> code </span>
						</span>
					</h2>
				</div>
				<ul className="slide"> {elements} </ul>
			</section>
		);
	}
}
