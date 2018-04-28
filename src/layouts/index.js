import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.scss";

class TemplateWrapper extends Component {
  componentDidMount() {
    if (typeof window !== `undefined`) {
      const WebFont = require("webfontloader");
      WebFont.load({
        google: {
          families: [`Roboto`, `Roboto+Mono`]
        }
      });
    }
  }
  render() {
    const { children } = this.props;
    const schemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: "https://canellariccardo.it",
      name: "Canella Riccardo - On the road developer",
      sameAs: [
        "http://www.facebook.com/your-profile",
        "https://www.instagram.com/thecrz/",
        "https://www.linkedin.com/in/riccardocanella/",
        "https://twitter.com/ricanella92"
      ],
      logo:
        "https://canellariccardo.it/favicons/apple-touch-startup-image-640x920.png"
    };
    const title = "Riccardo Canella - On the road developer";
    const description =
      "From Italy living in Parma, where I work as a Frontend Developer. With a fullstack javascript background, my strength lies in websites and apps.";
    return (
      <div>
        <noscript>Your browser does not support JavaScript!</noscript>
        <Helmet
          htmlAttributes={{
            lang: "en"
          }}
          title={title}
          meta={[
            { name: "description", content: description },
            {
              name: "keywords",
              content:
                "riccardo, canella, riccardocanella, riccardo canella, on the road developer"
            }
          ]}
        >
          <meta property="description" content={description} />
          <meta property="og:url" content="https://canellariccardo.it" />
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content={description} />
          {/* <meta property="og:image" content={image} /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@ricanella92" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {/* <meta name="twitter:image" content={image} /> */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
        </Helmet>
        {children()}
      </div>
    );
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
