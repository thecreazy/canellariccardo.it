import React, { Component } 		from 'react'
import styled                       from 'styled-components'
import { SectionTitle, Section } 	from '@/components/atoms'


export default class Code extends Component {

	render() {
		const { data } = this.props
		return (
			<Section id={'photo'}>
				<SectionTitle>What i code</SectionTitle>
			</Section>
		)
	}

}


