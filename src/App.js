import React, { Component, Fragment } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import ReactGA from 'react-ga'

import Home from '@/components/section/Home'
import Blog from '@/components/section/Blog'
import Photo from '@/components/section/Photo'
import Code from '@/components/section/Code'

import Theme from '../theme/'

ReactGA.initialize('UA-55764472-1');

injectGlobal`${Theme.global}`

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: null
    }
  }
  componentDidMount() {
    ReactGA.pageview(window.location.pathname)
    fetch('https://backend.canellariccardo.it/medium')
      .then(data => data.json())
      .then(data => {
        this.setState({
          blog: data
        })
      })
    fetch('https://backend.canellariccardo.it/instagram')
      .then(data => data.json())
      .then(data => {
        this.setState({
          instagram: data
        })
      })
    fetch('https://backend.canellariccardo.it/github')
      .then(data => data.json())
      .then(data => {
        this.setState({
          github: data
        })
      })
  }

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Fragment>
          <Home />
          {(() => {
            if (this.state.blog) return <Blog data={this.state.blog} />
          })()}
          {(() => {
            if (this.state.github)
              return <Code data={this.state.github.repos} />
          })()}
          {(() => {
            if (this.state.instagram)
              return <Photo data={this.state.instagram} />
          })()}
        </Fragment>
      </ThemeProvider>
    )
  }
}
