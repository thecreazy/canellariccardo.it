import variables from './core/variables'

import global from './global'

import photo from './components/photo'
import parallaximage from './components/parallaximage'
import blog from './components/blog'

import typography from './atoms/typography'
import section from './atoms/section'

export default {
  variables,
  global,
  components: {
    photo,
    parallaximage,
    blog
  },
  atoms: {
    typography,
    section
  }
}
