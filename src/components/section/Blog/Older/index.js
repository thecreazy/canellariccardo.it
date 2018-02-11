import React, { Component } from 'react'

import styled from 'styled-components'

import ParallaxImage from '@/components/section/Blog/ParallaxImage'

const Wrapper = styled.div`
  ${props => props.theme.components.blog.older.wrapper};
`
const Single = styled.div`
  ${props => props.theme.components.blog.older.single};
`
const Padded = styled.div`
  ${props => props.theme.components.blog.older.padded};
`
const Link = styled.a`
  ${props => props.theme.components.blog.older.link};
`

export default class Featured extends Component {
  render() {
    const { data } = this.props
    return (
      <Wrapper id={'older'}>
        {data.map((element, index) => (
          <Single key={`blog-older--${index}`}>
            <ParallaxImage type="big" src={element.image} />
            <Padded>
              <Link target={'_blank'} href={element.link}>
                {element.title}
              </Link>
            </Padded>
          </Single>
        ))}
      </Wrapper>
    )
  }
}
