import React, { Component } from 'react'

import styled from 'styled-components'

import ParallaxImage from '@/components/section/Blog/ParallaxImage'

const Wrapper = styled.div`
  margin: 0 auto 4.375rem;
  margin-top: 3.125rem;
  margin-bottom: 9.375rem;
  position: relative;
  width: 78%;
  z-index: 2;
`
const Details = styled.div`
  left: 0;
  right: inherit;
  text-align: left;
  position: absolute;
  bottom: 8%;
  width: auto;
  min-width: 100%;
  height: auto;
  z-index: 2;
`

const Background = styled.div`
  opacity: 0.08;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transform-origin: 100% 0;
  bottom: -3.5vh;
  left: 3.75%;
  z-index: -1;
  position: absolute;
  width: 92.5%;
  background-color: #1e3264;
  &:before {
    content: '';
    padding-bottom: 100%;
    float: left;
    padding-bottom: 48.64864865%;
    transition: padding-bottom 0.5s ease 0s;
  }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`

const Organization = styled.h4`
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  margin: 0 0 3% 3%;
  align-self: flex-start;
  font-size: 1.25rem;
  margin: 0 3% 3% 0;
  color: #4a4a4a;
  font-style: normal;
  font-weight: 500;
  font-family: NHGDSPMedium, Arial, sans-serif;
  background-color: rgba(30, 50, 100, 0.25);
  padding: 0.3125rem 1.5625rem;
  display: inline-block;
  width: auto;
`

const Title = styled.h3`
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  font-family: NHGDSPBold, Arial, sans-serif;
  font-size: 1.75rem;
  max-width: 55%;
  min-width: 55%;
  line-height: 1.1;
  margin: 0 auto 0 0;
  width: auto;
  color: #fff;
  background-color: #1e3264;
  padding: 0.625rem 2.1875rem;
  text-align: left;
  font-weight: 700;
  font-style: normal;
`

const Time = styled.p`
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  margin: -0.625rem 0 0 6%;
  font-size: 1.25rem;
  background-color: #fff;
  padding: 0.3125rem 1.5625rem;
  display: inline-block;
  color: #4a4a4a;
  font-family: ApRegular;
`

const Link = styled.a`
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  margin: 3.5% auto 0 7.5%;
  width: 40%;
  font-size: 1rem;
  display: flex;
  color: #4a4a4a;
  align-items: center;
  text-decoration: none;
  font-family: ApRegular;
`

export default class Featured extends Component {
  render() {
    const { data } = this.props
    return (
      <Wrapper id={'featured'}>
        <ParallaxImage src={data.image} />
        <Details>
          <Organization>{data.publication}</Organization>
          <Title>{data.title}</Title>
          <Time>{data.time}</Time>
          <Link target={'_blank'} href={data.link}>
            {data.abstract}
          </Link>
        </Details>
        <Background />
      </Wrapper>
    )
  }
}
