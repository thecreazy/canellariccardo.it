import React, { Component } from 'react'

export default class Slide extends Component{
    render(){
       const props = this.props
       return <div className="slide" style={{
            backgroundImage: `url(${this.props.image})`,
       }}>
       <div className="slide__overlay">
        <span className="slide__overlay__span">{this.props.title}</span>
        </div>
       
           </div>
    }
}
