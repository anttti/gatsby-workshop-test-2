import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { injectGlobal } from "styled-components";
import Header from "../components/Header";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

const Wrapper = styled.div`
  max-width: 45rem;
  margin: 0 auto;
  padding: 1rem;
`;

const TemplateWrapper = ({ children, data }) => (
  <Wrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: data.site.siteMetadata.description },
        { name: "keywords", content: data.site.siteMetadata.keywords }
      ]}
    />
    <Header title={data.site.siteMetadata.title} />

    {children()}
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;
