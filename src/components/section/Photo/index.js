import React, { Component } from 'react'
import styled from 'styled-components'
import { SectionTitle, Section } from '@/components/atoms'

const Wrapper = styled.ul`${props => props.theme.components.photo.wrapper}`
const Single = styled.li`${props => props.theme.components.photo.single}`
const Link = styled.a`${props => props.theme.components.photo.link}`
const Content = styled.div`${props => props.theme.components.photo.content}`
const Img = styled.img`${props => props.theme.components.photo.image}`
const Meta = styled.div`${props => props.theme.components.photo.meta}`
const Tag = styled.span`${props => props.theme.components.photo.tag}`

export default class Photo extends Component {
  render() {
    const { data } = this.props
    return (
      <Section id={'photo'}>
        <SectionTitle>What i photographer</SectionTitle>
        <Wrapper>
          {data.map((element, index) => (
            <Single key={`instagram--element-${index}`}>
              <Link
                target="_blank"
                rel="noopener"
                href={'https://www.instagram.com/thecrz/'}
              >
                <Content>
                  <Img src={element.images.standard_resolution.url} />
                  <Meta>
                    <Tag>#{element.tags[0]}</Tag>
                  </Meta>
                </Content>
              </Link>
            </Single>
          ))}
        </Wrapper>
      </Section>
    )
  }
}
