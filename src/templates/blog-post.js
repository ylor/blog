import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';
import Separator from '../elements/Separator';

const PostTitle = styled(HeadingPrimary)`
  font-size: 2.5rem;
`;

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Layout>
        <PostTitle>{post.frontmatter.title}</PostTitle>
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
