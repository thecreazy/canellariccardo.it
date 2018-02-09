import styled from 'styled-components'

const Paragraph = styled.p`
    font-family: ApRegular, Georgia, sans-serif;
    font-size: 1rem;
    letter-spacing: 2.5px;
    margin-bottom: 10px;
    color: #1e3264;
    line-height: 1;
    font-weight: 400;
    margin-top: -5px;
    text-align: center;
    margin-left: ${props => props.hero ? '70px': '0px'};
`;

export default Paragraph
