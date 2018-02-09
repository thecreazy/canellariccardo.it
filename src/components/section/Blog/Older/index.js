import React, { Component } from 'react'

import styled from 'styled-components'

import ParallaxImage from '@/components/section/Blog/ParallaxImage'

const Wrapper = styled.div`
    justify-content: space-around;
    display: flex;
    align-items: flex-start;
    flex: 1;
    width: 100%;
    margin: 1.5625rem 0;
`

const Single = styled.div`
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0);
    margin: 0;
    width: 15.625rem;
`
const Padded = styled.div`
    margin-top: 10px;
`

const Link = styled.a`
    line-height: 1;
	color: #4a4a4a;
	font-weight: 700;
    font-family: Circular;
    font-style: normal;
    margin-top: 10px;
    text-decoration: none;
    font-family: ApBold;
`

export default class Featured extends Component {
	render() {
		const { data } = this.props
		return (
			<Wrapper id={'older'}> 
                {data.map( (element,index)=> (
                    <Single key={`blog-older--${index}`}>
                        <ParallaxImage type="big" src={ element.image } />
                        <Padded>
                            <Link target={'_blank'} href={element.link}>{element.title}</Link>
                        </Padded>
                    </Single>
                ))
                }
			</Wrapper>
		)
	}
}