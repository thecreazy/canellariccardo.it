import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Trail, animated } from 'react-spring';

import '../styles/main.scss';

require('isomorphic-fetch');

const items = new Array(1).fill(0).map((_, i) => i);
class TemplateWrapper extends Component {
	state = { coords: [ 0, 0 ] };

	handleMouseMove = ({ pageX, pageY }) => this.setState({ coords: [ pageX, pageY ] });

	transform = (x, y) => `translate3d(${x - 35}px, ${y - 35}px, 0)`;

	componentDidMount() {
		if (typeof window !== `undefined`) {
			const WebFont = require('webfontloader');
			WebFont.load({
				google : {
					families : [ `Roboto+Mono`, `Heebo` ]
				}
			});
		}
		window.addEventListener('mousemove', this.handleMouseMove);
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.handleMouseMove);
	}

	render() {
		const { children } = this.props;
		const schemaOrgJSONLD = {
			'@context' : 'http://schema.org',
			'@type'    : 'WebSite',
			url        : 'https://canellariccardo.it',
			name       : 'Canella Riccardo - On the road developer',
			sameAs     : [
				'http://www.facebook.com/your-profile',
				'https://www.instagram.com/thecrz/',
				'https://www.linkedin.com/in/riccardocanella/',
				'https://twitter.com/ricanella92'
			],
			logo       : 'https://canellariccardo.it/favicons/apple-touch-startup-image-640x920.png'
		};
		const title = 'Riccardo Canella - On the road developer';
		const description =
			'From Italy living in Parma, where I work as a Frontend Developer. With a fullstack javascript background, my strength lies in websites and apps.';
		return (
			<div>
				<Trail native items={items} to={this.state}>
					{(item, i) => (props) => (
						<animated.div
							className="pointer"
							style={{
								zIndex    : 99,
								transform : props.coords.interpolate(this.transform)
							}}
						/>
					)}
				</Trail>
				<noscript>Your browser does not support JavaScript!</noscript>
				<Helmet
					htmlAttributes={{
						lang : 'en'
					}}
					title={title}
					meta={[
						{ name: 'description', content: description },
						{
							name    : 'keywords',
							content : 'riccardo, canella, riccardocanella, riccardo canella, on the road developer'
						}
					]}
				>
					<meta name="Description" content={description} />
					<meta name="description" content={description} />
					<meta property="og:url" content="https://canellariccardo.it" />
					<meta property="og:title" content={title} />
					<meta property="og:site_name" content={title} />
					<meta property="og:description" content={description} />
					{/* <meta property="og:image" content={image} /> */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@ricanella92" />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={description} />
					{/* <meta name="twitter:image" content={image} /> */}
					<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="manifest" href="/favicons/manifest.json" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="theme-color" content="#fff" />
				<meta name="application-name" content="canella-riccardo-it" />
				<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="apple-mobile-web-app-title" content="canella-riccardo-it" />
				<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
					href="/favicons/apple-touch-startup-image-320x460.png" />
				<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
					href="/favicons/apple-touch-startup-image-640x920.png" />
				<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
					href="/favicons/apple-touch-startup-image-640x1096.png" />
				<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
					href="/favicons/apple-touch-startup-image-750x1294.png" />
				<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
					href="/favicons/apple-touch-startup-image-1182x2208.png" />
				<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)"
					href="/favicons/apple-touch-startup-image-1242x2148.png" />
				<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)"
					href="/favicons/apple-touch-startup-image-748x1024.png" />
				<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)"
					href="/favicons/apple-touch-startup-image-768x1004.png" />
				<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
					href="/favicons/apple-touch-startup-image-1496x2048.png" />
				<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
					href="/favicons/apple-touch-startup-image-1536x2008.png" />
					<script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
				</Helmet>
				{children}
			</div>
		);
	}
}

export default TemplateWrapper;
