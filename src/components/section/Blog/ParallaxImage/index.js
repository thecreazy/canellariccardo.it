import React, { Component } from 'react'

import styled from 'styled-components'

const ImageStyled = styled.div`
    ${props => props.theme.components.parallaximage};
    background-image: url('${props => props.image}');
    transform: matrix(1, 0, 0, 1, 0, 0);
    margin-left: ${props => (props.type === 'big' ? '0%' : '50%')};
`

export default class ParallaxImage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // document.addEventListener("mousemove", (e) => {
    //     const {clientWidth, clientHeight, offsetLeft, offsetTop} = this.imageStyled
    //     const halfW = ( clientWidth / 2 )
    //     const halfH = ( clientHeight / 2 )
    //     const coorX = ( halfW - (  e.pageX / 10 - offsetLeft ) );
    //     const coorY = ( halfH - (  e.pageY / 10 - offsetTop) );
    //     const degX  = ( ( coorY / halfH ) * 10 ) + 'deg';
    //     const degY  = ( ( coorX / halfW ) * -10 ) + 'deg';
    //     this.setState({
    //         moviment : `transform: perspective(600px) rotateY(${degY}) rotateX(${degX}) translate3d(0, -2px, 0) scale(1.1);`
    //     })
    // })
  }

  render() {
    const props = this.props
    return (
      <ImageStyled
        type={props.type}
        innerRef={comp => {
          this.imageStyled = comp
        }}
        moviment={this.state.moviment}
        image={props.src}
      />
    )
  }
}
