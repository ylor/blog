import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeaderLogo from '../components/HeaderLogo';

import HeadingPrimary from '../elements/HeadingPrimary';
import HeadingSecondary from '../elements/HeadingSecondary';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';

const Hero = styled.div`
  margin-bottom: 10vh;

  @media (max-width: 849px) {
    margin-bottom: 5vh;
  }
`;

const Deck = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: -16px;
`;


const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 25px;

  @media (max-width: 849px) {
    padding-left: 0;
  }
`;

function Blog({ data }) {
  return (
    <>
      <SEO title="weblog" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingPrimary>Roly Reyes</HeadingPrimary>
          <Deck>
            a weblog.
          </Deck>
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post key={node.id}>
              <Link to={node.fields.slug}>
                <HeadingSecondary>{node.frontmatter.title}</HeadingSecondary>
              </Link>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date} - {node.timeToRead} min. read</TextDate>
            </Post>
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter:  { fileAbsolutePath: { regex: "/content/posts/" } }
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
          timeToRead
        }
      }
    }
  }
`;

export default Blog;
