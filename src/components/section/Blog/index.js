import React, { Component } 		from 'react'

import { SectionTitle, Section } 	from '@/components/atoms'
import Fetured	 					from './Featured'
import Older 						from './Older'

export default class Blog extends Component {
	render() {
		const { data } = this.props
		console.log(data)
		return (
			<Section id={'home'}>
				<SectionTitle>What I write</SectionTitle>
                <Fetured data={data.featured} />
				<Older data={data.lists} />
			</Section>
		)
	}

}


