import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import HeadingPrimary from '../elements/HeadingPrimary';
import HeadingSecondary from '../elements/HeadingSecondary';
import Deck from '../elements/Deck';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  padding-top: 1vh;
  padding-bottom: 3vh;
`;

function Blog({ data }) {
  return (
    <>
      <SEO title="weblog" />
      <Layout>
        <HeadingPrimary>Roly Reyes</HeadingPrimary>
        <Deck>a weblog.</Deck>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.id}>
            <Link to={node.fields.slug}>
              <HeadingSecondary>{node.frontmatter.title}</HeadingSecondary>
            </Link>
            <TextBody>{node.excerpt}</TextBody>
            <TextDate>
              {node.frontmatter.date} - {node.timeToRead} min. read
            </TextDate>
          </Post>
        ))}
      </Layout>
    </>
  );
}

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
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
          timeToRead
        }
      }
    }
  }
`;
