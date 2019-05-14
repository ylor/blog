import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
//import Header from '../components/Header';
import SEO from '../components/SEO';

import Hero from '../elements/Hero';
import HeadingPrimary from '../elements/HeadingPrimary';
import HeadingSecondary from '../elements/HeadingSecondary';
import Deck from '../elements/Deck';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';
import Separator from '../elements/Separator';

const Post = styled.div`
  //border-bottom: 1px solid lightgray;
  margin-bottom: 3vh;

  @media (max-width: 900px) {
    padding-left: 0;
  }
`;

function Blog({ data }) {
  return (
    <>
      <SEO title="weblog" />
      <Layout>
        <Hero>
          <HeadingPrimary>Roly Reyes</HeadingPrimary>
          <Deck>a weblog.</Deck>
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.id}>
            <Link to={node.fields.slug}>
              <HeadingSecondary>{node.frontmatter.title}</HeadingSecondary>
            </Link>
            <TextBody>{node.excerpt}</TextBody>
            <TextDate>
              {node.frontmatter.date} - {node.timeToRead} min. read
            </TextDate>
            <Separator />
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
