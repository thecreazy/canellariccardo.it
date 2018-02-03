import styled from 'styled-components'

const Section = styled.section`
    height: 900px;
    width: ${props => props.type=='hero' ? '600px': '1000px'};
    display: block;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    padding-top: 80px;
`;

export default Section
