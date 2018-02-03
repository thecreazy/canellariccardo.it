import React, { Component } from 'react'

import {Title,
		Subtitle,
		Description,
        Paragraph,
        Section } from '@/components/atoms'

export default class App extends Component {
	render() {
        console.log(Section)
		return (
			<Section type={'hero'} id={'home'}>
				<Subtitle>Hello</Subtitle>
				<Title>Riccardo Canella</Title>
				<Paragraph>Specializing in websites, apps, e-commerce, lifestyle, packaging and overall creative + tech direction.</Paragraph>
			</Section>
		)
	}

}
