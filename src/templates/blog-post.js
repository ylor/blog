import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import HeaderBack from '../components/HeaderBack';
import Footer from '../components/Footer';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';
import Separator from '../elements/Separator';

const Spacer = styled.div`
  padding-top: 10vh;
`;

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Layout>
        <Spacer />
        <HeaderBack />
        <HeadingPrimary>{post.frontmatter.title}</HeadingPrimary>
        <TextDate>{post.frontmatter.date}</TextDate>
        <TextBody dangerouslySetInnerHTML={{ __html: post.html }} />
        <Separator />
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
