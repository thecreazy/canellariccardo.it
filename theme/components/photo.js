import variables from '../core/variables'

const photo = {}

photo.wrapper = `
    position: relative;
    width: 100%;
    max-width: 1680px;
    padding-left: 20px;
    padding-right: 20px;
    list-style: none;
    @media ${variables.smallAndDown}{
        padding: 0px;
    }
`

photo.single = `
    width: calc(30.333333333333336% - 12.3333333333333333px);
    float: left;
    opacity: 1;
    transform: translateY(0px);
    padding: 60px 20px;
    @media ${variables.smallAndDown}{
        float: unset;
        width: 100%;
        padding: 0px;
    }
`

photo.link = `
display: block;
position: relative;
margin-top: 20px;
margin-bottom: 20px;
z-index: 100;
padding-top: 60px;
color: #eee;
text-decoration: none;
transition: all 0.25s ease-out;
background-color: transparent;
`

photo.content = `
display: block;
position: relative;
`

photo.image = `
opacity: 1;
transition: all 0.75s ease-out;
max-width: 100%;
height: auto;
vertical-align: middle;
border: 0;
`
photo.meta = `
padding: 20px;
text-transform: uppercase;
font-size: 13px;
color: ${variables.seconday};
font-weight: 400;
position: absolute;
left: 20px;
right: 20px;
bottom: 20px;
top: -30px;
border: 1px solid hsla(0, 0%, 100%, 0.1);
transition: all 0.25s ease-out;
top: -40px;
color: ${variables.seconday};
border: 1px solid ${variables.seconday};
`

photo.tag = `
position: absolute;
top: -1px;
z-index: 10;
padding: 10px;
color: ${variables.white};
font-family: ApRegular;
-webkit-transform: translateY(-50%);
transform: translateY(-50%);
background-color: ${variables.primary};
`

export default photo
