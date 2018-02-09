import React, { Component, Fragment } from 'react'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'

import Home from '@/components/section/Home'
import Blog from '@/components/section/Blog'
import Photo from '@/components/section/Photo'
import Code from '@/components/section/Code'


injectGlobal`
body {
	margin: 0;
	background: #fff;
	color: #1e3264;
}
@font-face {
    font-family: ApBold;
    src: url('/fonts/AP-Bold.woff') format('woff');
}
@font-face {
    font-family: ApRegular;
    src: url('/fonts/AP-Regular.woff') format('woff');
}
@font-face {
    font-family: NHGDSPBold;
    src: url('/fonts/NHGDSP-Bold.woff') format('woff');
}
@font-face {
    font-family: NHGDSPMedium;
    src: url('/fonts/NHGDSP-Medium.woff') format('woff');
}
`

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
		fetch('https://backend.canellariccardo.it/instagram')
		.then((data)=>data.json())
		.then((data)=>{
			this.setState({
				instagram: data
			})
		})
		fetch('https://backend.canellariccardo.it/github')
		.then((data)=>data.json())
		.then((data)=>{
			this.setState({
				github: data
			})
		})
		
	}

	render() {

		return (
			<ThemeProvider theme={{ciao:'ciao'}}>
			<Fragment>
				<Home />
				{
					(() =>{ if(this.state.blog) return <Blog data={this.state.blog} />})() 
				}
				{
					(() =>{ if(this.state.blog) return <Code data={this.state.github} />})() 
				}
				{
					(() =>{ if(this.state.instagram) return <Photo data={this.state.instagram} />})() 
				}
			</Fragment>
			</ThemeProvider>
		)
	}

}
