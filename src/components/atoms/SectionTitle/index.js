import styled from 'styled-components'

const SectionTitle = styled.h3`
  font-family: NHGDSPBold, Arial, sans-serif;
  font-size: 3.75rem;
  color: #1e3264;
  cursor: pointer;
  transition: opacity .3s;
  text-transform: capitalize;
  text-align: center;
  position: relative;
  &:after{
    content:'';
    position: absolute;

  }
`;

export default SectionTitle
