import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

import Hero from '../elements/Hero';
import HeadingPrimary from '../elements/HeadingPrimary';
import HeadingSecondary from '../elements/HeadingSecondary';
import Deck from '../elements/Deck';
import Separator from '../elements/Separator';

const Snippet = styled.div`
  margin-bottom: 0px;

  @media (max-width: 900px) {
    padding-left: 0;
  }
`;

function Blog({ data }) {
  return (
    <>
      <SEO title="Snippets" />
      <Layout>
        <Hero>
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
