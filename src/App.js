import React, { Component, Fragment } from 'react'
import styled, {ThemeProvider} from 'styled-components'

import Backgrounds from '@/components/section/Backgrounds'
import Home from '@/components/section/Home'

export default class App extends Component {
	render() {
		const backgrounds = [
			'https://uploads-ssl.webflow.com/5a136d4febf010000154196b/5a31b3ac7b7a1700017c4551_bg-harrys-a.jpg',
			'https://uploads-ssl.webflow.com/5a136d4febf010000154196b/5a31b390c821c5000162426e_bg-hero-a.jpg'
		]
		return (
			<ThemeProvider theme={{ciao:'ciao'}}>
			<Fragment>
				<Backgrounds bgs={backgrounds} />
				<Home />
			</Fragment>
			</ThemeProvider>
		)
	}

}
