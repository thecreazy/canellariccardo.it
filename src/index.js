import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App'

const root = document.createElement('div')
root.id = 'root'
document.body.insertBefore(root, document.body.firstChild)

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'))
