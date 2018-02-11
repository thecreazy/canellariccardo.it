export default `
    opacity: 1;
    margin: 0;
    background-size: cover;
    background-position: center center;
    z-index: 3;
    &:before{
        float: left;
        transition: padding-bottom .5s ease 0s;
        content: '';
        padding-bottom: 100%;
    }
    &:after{
        content: '';
        display: table;
        clear: both;
    }
`
