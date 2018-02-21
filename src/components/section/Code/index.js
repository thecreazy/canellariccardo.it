import React, { Component } from 'react'
import styled from 'styled-components'
import { SectionTitle, Section, Paragraph } from '@/components/atoms'

export default class Code extends Component {
  render() {
    const { data } = this.props
    return (
      <Section id={'photo'}>
        <SectionTitle>What i code</SectionTitle>
        {data.map(element => (
          <Paragraph>
            <a target="_blank" href={element.url}>{element.name}</a>
          </Paragraph>
        ))}
      </Section>
    )
  }
}
