import React, { Component } from 'react'
import Slider from 'react-slick'

import Slide from './slide'

export default class Blog extends Component{
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentWillMount(){
        fetch('https://backend.canellariccardo.it/medium')
        .then(response => response.json())
        .then(data => this.setState(data))
    }
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true
        };
        return <section id="blog">
            <h3 className="section__title__background">What i write</h3>
            <Slider {...settings}>
                {(()=>{
                    const featured = [<div><Slide {...this.state.featured} key={`swiper--1`} /></div>]
                    const elements = this.state.lists.map((element, index) => (
                        <div>
                            <Slide {...element} key={`swiper-${index}`} />
                        </div>
                    ))
                    return [...featured, ...elements]
                })()}
            </Slider>
        </section>
    }
}
