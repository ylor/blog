import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';
import Separator from '../elements/Separator';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Layout>
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
