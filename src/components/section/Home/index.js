import React, { Component } from 'react'

import {Title,
		Subtitle,
        Paragraph,
        Section } from '@/components/atoms'

export default class App extends Component {
	render() {
		return (
			<Section type={'hero'} id={'home'}>
				<Title>Riccardo Canella</Title>
				<Subtitle>ON THE ROAD DEVELOPER</Subtitle>
				<Paragraph>From Italy living in Parma, where I work as a Frontend Developer at <a href="caffeina.com">Caffeina</a>. With a fullstack javascript background, my strength lies in websites and apps. If you want to know more about me, my work or if youʼre a head hunter who wants to offer me a lot of money, feel free to contact me on canella_riccardo[at]icloud.com.</Paragraph>
			</Section>
		)
	}

}
