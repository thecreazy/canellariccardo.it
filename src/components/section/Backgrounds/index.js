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
    background: ${props => props.background};
    background-position: 50% 50%;
    background-size: cover;
    will-change: opacity;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
`

export default class App extends Component {
	render() {
        const {bgs} = this.props
		return (
			<Wrapper id={'bgs'}>
            {
                bgs.map((element,index) => (
                    <Background background={element} id={`bgs-${index}`} key={`bgs-${index}`} />
                ))
            }
			</Wrapper>
		)
	}

}
