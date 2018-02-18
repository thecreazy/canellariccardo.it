import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import { Title, Paragraph } from './components/atoms'

import Theme from '../theme/'

injectGlobal`${Theme.global}`

const CenterDecorator = storyFn => (
  <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>
)
addDecorator(CenterDecorator)

storiesOf('Welcome', module).add('to canellariccardo.it', () => (
  <div>
    <Title>Welcome to Canella Riccardo Storybook</Title>
    <Paragraph>
      This will be the center to testo all react components created for this
      site{' '}
    </Paragraph>
  </div>
))
