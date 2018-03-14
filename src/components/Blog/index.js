import React, { Component } from 'react'

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
        console.log(this.state)
        return <section id="blog">
        </section>
    }
}
