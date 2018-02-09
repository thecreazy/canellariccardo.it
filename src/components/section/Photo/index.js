import React, { Component } 		from 'react'
import styled                       from 'styled-components'
import { SectionTitle, Section } 	from '@/components/atoms'

const Wrapper = styled.ul`
    position: relative;
    width: 100%;
    max-width: 1680px;
    padding-left: 20px;
    padding-right: 20px;
    list-style: none;
`

const Single = styled.li`
    width: calc(30.333333333333336% - 12.3333333333333333px);
    float:left;
    opacity: 1;
    transform: translateY(0px);
    padding: 60px 20px;
`
const Link = styled.a`
    display: block;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    z-index: 100;
    padding-top: 60px;
    color: #eee;
    text-decoration: none;
    transition: all .25s ease-out;
    background-color: transparent;
`
const Content = styled.div`
    display: block;
    position: relative
`

const Img = styled.img`
    opacity: 1;
    transition: all .75s ease-out;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
`

const Meta = styled.div`
    padding: 20px;
    text-transform: uppercase;
    font-size: 13px;
    color: #c0a062;
    font-weight: 400;
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 20px;
    top: -30px;
    border: 1px solid hsla(0, 0%, 100%, .1);
    transition: all .25s ease-out;
    top: -40px;
    color: #c0a062;
    border: 1px solid #c0a062
`

const Tag = styled.span`
    position: absolute;
    top: -1px;
    z-index: 10;
    padding: 10px;
    color: #fff;
    font-family: ApRegular;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: #1e3264
`

export default class Photo extends Component {
	render() {
		const { data } = this.props
		return (
			<Section id={'photo'}>
				<SectionTitle>What i photographer</SectionTitle>
                <Wrapper>
                    {data.map((element,index)=>(
                        <Single key={`instagram--element-${index}`}>
                            <Link target="_blank" rel="noopener" href={'https://www.instagram.com/thecrz/'}>
                                <Content>
                                    <Img src={element.images.standard_resolution.url}/>
                                    <Meta> 
                                        <Tag>#{element.tags[0]}</Tag>
                                    </Meta>
                                </Content>
                            </Link>
                        </Single>
                    ))}
                </Wrapper>
			</Section>
		)
	}

}


