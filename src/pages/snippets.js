import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeaderBack from '../components/HeaderBack';

import Padding from '../elements/Padding';
import HeadingPrimary from '../elements/HeadingPrimary';
import HeadingSecondary from '../elements/HeadingSecondary';
import Deck from '../elements/Deck';
import Separator from '../elements/Separator';

const Hero = styled.div`
  margin-bottom: 5vh;

  @media (max-width: 849px) {
    margin-bottom: 5vh;
  }
`;

const Snippet = styled.div`
  margin-bottom: 0px;

  @media (max-width: 849px) {
    padding-left: 0;
  }
`;

function Blog({ data }) {
  return (
    <>
      <SEO title="Snippets" />
      <Padding />
      <Layout>
        <Hero>
          <HeaderBack />
          <HeadingPrimary>Snippets</HeadingPrimary>
          <Deck>bits of code</Deck>
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Snippet key={node.id}>
            <Link to={node.fields.slug}>
              <HeadingSecondary>{node.frontmatter.title}</HeadingSecondary>
            </Link>
          </Snippet>
        ))}
        <Separator />
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/snippets/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
