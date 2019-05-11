import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import HeaderBack from '../components/HeaderBack';
import NavBar from '../components/NavBar';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';

const Spacer = styled.div`
  padding-top: 10vh;
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 25px;

  @media (max-width: 849px) {
    padding-left: 0;
  }
`;


export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Spacer />
      <HeaderBack />
      <Layout>
        <Post>
        <HeadingPrimary>{post.frontmatter.title}</HeadingPrimary>
        <TextDate>{post.frontmatter.date}</TextDate>
        <TextBody dangerouslySetInnerHTML={{ __html: post.html }} />
        </Post>
      <NavBar />
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
