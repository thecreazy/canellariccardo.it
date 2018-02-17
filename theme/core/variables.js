const smallScreenUp =   '601px'
const mediumScreenUp =  '993px'
const largeScreenUp =   '1201px'
const smallScreen =     '600px'
const mediumScreen =    '992px'
const largeScreen =     '1200px'

export default {
  primary: '#1e3264',
  seconday: '#c0a062',
  grey: '#4a4a4a',
  white: '#ffffff',
  mediumAndUp: `only screen and (min-width : ${smallScreenUp})`,
  largeAndUp: `only screen and (min-width : ${mediumScreenUp})`,
  extraLargeAndUp: `only screen and (min-width : ${largeScreenUp})`,
  smallAndDown: `only screen and (max-width : ${smallScreen})`,
  mediumAndDown: `only screen and (max-width : ${mediumScreen})`,
  mediumOnly: `only screen and (min-width : ${smallScreenUp}) and (max-width : ${mediumScreen})`
}


