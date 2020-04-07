import React, { Component } from 'react';

import config from '../../config';

import Pic from './pic';

export default class Photos extends Component {
	render() {
		return (
			<section id="photos" className="">
				<div className="section__title__decorator animate">
					<h2 className="section__title__background">
						<span>
							<span>Follow me </span>
						</span>
					</h2>
				</div>
				<div className="__flex __mobile-column">
					<div className="__max--50 __mobile-full">
						<p className="social information__social">
							<a
								aria-label="Facebook"
								target="_blank"
								rel="noopener noreferrer"
								href={config.social.facebook}
							>
								<span className="icon-facebook" />
							</a>
							<a
								aria-label="Twitter"
								target="_blank"
								rel="noopener noreferrer"
								href={config.social.twitter}
							>
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
							<a
								aria-label="Github"
								target="_blank"
								rel="noopener noreferrer"
								href={config.social.github}
							>
								<span className="icon-github" />
							</a>
						</p>
						<p className="information__description">
							The camera is an instrument that teaches people how to see without a camera.
						</p>
						<p className="information__link">
							<a rel="noopener noreferrer" href={config.social.flickr} target="_blank">
								Check out my last pics on Flickr
							</a>
						</p>
					</div>
					<div className="__max--50 __mobile-full __flex-row __flex-wrap __space--around">
					</div>
				</div>
			</section>
		);
	}
}
