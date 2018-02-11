import styled from 'styled-components'

const Subtitle = styled.h2`
  ${props => props.theme.atoms.typography.subtitle};
  margin-left: ${props => (props.hero ? '70px' : '0px')};
`

export default Subtitle
