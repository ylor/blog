import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

import HeadingPrimary from '../elements/HeadingPrimary';
import HeadingSecondary from '../elements/HeadingSecondary';
import Deck from '../elements/Deck';
import Separator from '../elements/Separator';

const Snippet = styled.div``;

const SnippetTitle = styled(HeadingSecondary)`
  margin: 0.666rem;
`;

function Blog({ data }) {
  return (
    <>
      <SEO title="Snippets" />
      <Layout>
        <HeadingPrimary>Snippets</HeadingPrimary>
        <Deck>bits of code</Deck>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Snippet key={node.id}>
            <Link to={node.fields.slug}>
              <SnippetTitle>{node.frontmatter.title}</SnippetTitle>
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
