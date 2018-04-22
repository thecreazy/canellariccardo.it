import React, {Component} from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";


import "./index.scss";

class TemplateWrapper extends Component{
  componentDidMount(){
    if (typeof window !== `undefined`) {
      const WebFont = require('webfontloader');
      WebFont.load({
        google:{
          families: [
            `Roboto`,
            `Roboto+Mono`
          ]
        }
      })
    }
  }
  render(){
    const { children } = this.props
    return   <div>
      <noscript>Your browser does not support JavaScript!</noscript>
      <Helmet
        htmlAttributes={{
          lang: "en"
        }}
        title="Riccardo Canella - On the road developer"
        meta={[
          { name: "description", content: "Riccardo Canella Site" },
          {
            name: "keywords",
            content:
              "riccardo, canella, riccardocanella, riccardo canella, on the road developer"
          }
        ]}
      />
      {children()}
    </div>
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
