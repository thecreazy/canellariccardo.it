import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Riccardo Canella - On the road developer"
      meta={[
        { name: 'description', content: 'Riccardo Canella site' },
        { name: 'keywords', content: 'riccardo, canella, riccardocanella, riccardo canella, on the road developer' },
      ]}
    />
    <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono" rel="stylesheet" />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
