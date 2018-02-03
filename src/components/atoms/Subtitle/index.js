import styled from 'styled-components'

const Subtitle = styled.h2`
    font-size: 20px;
    letter-spacing: 2.5px;
    margin-bottom: 10px;
    color: white;
    line-height: 36px;
    font-weight: 700;
    margin-top: 20px;
    margin-left: ${props => props.hero ? '70px': '0px'};
`;

export default Subtitle
