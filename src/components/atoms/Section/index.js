import styled from 'styled-components'

const Section = styled.section`
  width: ${props => (props.type == 'hero' ? '600px' : '1000px')};
  display: block;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  padding-top: 20px;
`

export default Section
