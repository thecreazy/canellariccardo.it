import styled from 'styled-components'

const Section = styled.section`
  width: ${props => (props.type == 'hero' ? '600px' : '1000px')};
  ${props => props.theme.atoms.section.default};
`

export default Section
