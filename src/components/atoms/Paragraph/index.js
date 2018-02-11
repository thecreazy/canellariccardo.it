import styled from 'styled-components'

const Paragraph = styled.p`
  ${props => props.theme.atoms.typography.paragraph};
  margin-left: ${props => (props.hero ? '70px' : '0px')};
`

export default Paragraph
