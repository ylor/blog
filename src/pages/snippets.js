import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeaderBack from '../components/HeaderBack';
import HeaderLogo from '../components/HeaderLogo';

import HeadingPrimary from '../elements/HeadingPrimary';
import HeadingSecondary from '../elements/HeadingSecondary';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';

const Hero = styled.div`
  margin-bottom: 5vh;

  @media (max-width: 849px) {
    margin-bottom: 0vh;
  }
`;

const Deck = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: -16px;
`;

const Post = styled.div`
  margin-bottom: 0px;

  @media (max-width: 849px) {
    padding-left: 0;
  }
`;

function Blog({ data }) {
  return (
    <>
      <SEO title="Snippets" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingPrimary>Snippets</HeadingPrimary>
          <Deck>bits of code</Deck>
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <Post key={node.id}>
              <HeadingSecondary>{node.frontmatter.title}</HeadingSecondary>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter:  { fileAbsolutePath: { regex: "/content/snippets/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
