import React, { Component } from 'react'

import styled from 'styled-components'

import ParallaxImage from '@/components/section/Blog/ParallaxImage'

const Wrapper = styled.div`${props => props.theme.components.blog.featured.wrapper}`
const Details = styled.div`${props => props.theme.components.blog.featured.details}`
const Background = styled.div`${props => props.theme.components.blog.featured.background}`
const Organization = styled.h4`${props => props.theme.components.blog.featured.organization}`
const Title = styled.h3`${props => props.theme.components.blog.featured.title}`
const Time = styled.p`${props => props.theme.components.blog.featured.time}`
const Link = styled.a`${props => props.theme.components.blog.featured.link}`

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
