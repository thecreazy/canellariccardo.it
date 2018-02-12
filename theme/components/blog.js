
import variables from '../core/variables'

const blog = {
  older: {},
  featured: {}
}

blog.older.wrapper = `
  justify-content: space-around;
  display: flex;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  margin: 1.5625rem 0;
`
blog.older.single = `
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  margin: 0;
  width: 15.625rem;
`
blog.older.padded = `
  margin-top: 10px;
`

blog.older.link = `
  line-height: 1;
  color: ${variables.primary};
  font-weight: 700;
  font-style: normal;
  margin-top: 10px;
  text-decoration: none;
  font-family: ApBold;
`

blog.featured.wrapper = `
margin: 0 auto 4.375rem;
margin-top: 3.125rem;
margin-bottom: 9.375rem;
position: relative;
width: 78%;
z-index: 2;
`

blog.featured.details = `
left: 0;
right: inherit;
text-align: left;
position: absolute;
bottom: 8%;
width: auto;
min-width: 100%;
height: auto;
z-index: 2;
`

blog.featured.background = `
opacity: 0.08;
transform: matrix(1, 0, 0, 1, 0, 0);
transform-origin: 100% 0;
bottom: -3.5vh;
left: 3.75%;
z-index: -1;
position: absolute;
width: 92.5%;
background-color: ${variables.primary};
&:before {
  content: '';
  padding-bottom: 100%;
  float: left;
  padding-bottom: 48.64864865%;
  transition: padding-bottom 0.5s ease 0s;
}
&:after {
  content: '';
  display: table;
  clear: both;
}
`

blog.featured.organization = `
opacity: 1;
transform: matrix(1, 0, 0, 1, 0, 0);
margin: 0 0 3% 3%;
align-self: flex-start;
font-size: 1.25rem;
margin: 0 3% 3% 0;
color: ${variables.grey};
font-style: normal;
font-weight: 500;
font-family: NHGDSPMedium, Arial, sans-serif;
background-color: rgba(30, 50, 100, 0.25);
padding: 0.3125rem 1.5625rem;
display: inline-block;
width: auto;
`

blog.featured.title = `
opacity: 1;
transform: matrix(1, 0, 0, 1, 0, 0);
font-family: NHGDSPBold, Arial, sans-serif;
font-size: 1.75rem;
max-width: 55%;
min-width: 55%;
line-height: 1.1;
margin: 0 auto 0 0;
width: auto;
color: ${variables.white};
background-color: ${variables.primary};
padding: 0.625rem 2.1875rem;
text-align: left;
font-weight: 700;
font-style: normal;
`

blog.featured.time = `
opacity: 1;
transform: matrix(1, 0, 0, 1, 0, 0);
margin: -0.625rem 0 0 6%;
font-size: 1.25rem;
background-color: ${variables.white};
padding: 0.3125rem 1.5625rem;
display: inline-block;
color: ${variables.grey};
font-family: ApRegular;
`

blog.featured.link = `
opacity: 1;
transform: matrix(1, 0, 0, 1, 0, 0);
margin: 3.5% auto 0 7.5%;
width: 40%;
font-size: 1rem;
display: flex;
color: ${variables.grey};
align-items: center;
text-decoration: none;
font-family: ApRegular;
`

export default blog
