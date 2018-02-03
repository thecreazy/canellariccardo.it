import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper =  styled.div`
    position: fixed;
    display: block;
    width: 100vw;
    height: 120vh;
    transform: translate(0, 0)
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.background});
    background-position: 50% 50%;
    background-size: cover;
    will-change: opacity;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(19, 19, 19, 0) 20%, rgb(19, 19, 19) 40%);
    mix-blend-mode: var(--blend, normal);
`

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            '--x': '0px',
            '--y': '0px',
            opacity: 1
        }
    }
    componentDidMount(){
        document.addEventListener("mousemove", (e) => {
            this.setState({
                '--x': e.clientX + 'px',
                '--y': e.clientY + 'px'
            })
        })
        document.addEventListener("scroll", (e) => {
            const value = 70 / window.pageYOffset
            this.setState({
                opacity: value > 1 ? 1 : value
            })
        })
    }
	render() {
        const {bgs} = this.props
		return (
			<Wrapper id={'bgs'}>
            {
                bgs.map((element,index) => (
                    <Background background={element} id={`bgs-${index}`} key={`bgs-${index}`} />
                ))
            }
            <Overlay id={'mouseoverlay'} style={this.state} />
			</Wrapper>
		)
	}

}
