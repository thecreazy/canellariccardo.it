import React, { Component, Fragment } from 'react'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'

import Backgrounds from '@/components/section/Backgrounds'
import Home from '@/components/section/Home'
import Blog from '@/components/section/Blog'

import ApBold 			from './static/fonts/AP-Bold.woff'
import ApRegular 		from './static/fonts/AP-Regular.woff'
import NHGDSPBold 		from './static/fonts/NHGDSP-Bold.woff'
import NHGDSPMedium		from './static/fonts/NHGDSP-Medium.woff'

console.log(ApBold)

injectGlobal`
body {
	margin: 0;
}
@font-face {
    font-family: ApBold;
    src: url(${ApBold}) format('woff');
}
@font-face {
    font-family: ApRegular;
    src: url(${ApRegular}) format('woff');
}
@font-face {
    font-family: NHGDSPBold;
    src: url(${NHGDSPBold}) format('woff');
}
@font-face {
    font-family: MyFont;
    src: url(${NHGDSPMedium}) format('woff');
}
`

const backgrounds = [
	'linear-gradient(145deg,#ffc867,#f037a6)',
	'linear-gradient(145deg,#509bf5,#f037a6)',
	'linear-gradient(145deg,#c3f0c8,#509bf5)',
]

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			blog: null
		}
	}
	componentDidMount(){
		fetch('https://backend.canellariccardo.it/medium')
		.then((data)=>data.json())
		.then((data)=>{
			this.setState({
				blog: data
			})
		})
	}

	render() {

		return (
			<ThemeProvider theme={{ciao:'ciao'}}>
			<Fragment>
				<Backgrounds bgs={backgrounds} />
				<Home />
				{
					(() =>{ if(this.state.blog) return <Blog data={this.state.blog} />})() 
				}
				
			</Fragment>
			</ThemeProvider>
		)
	}

}
