import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';
import Button from '../elements/Button';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Info({ data }) {
  return (
    <>
      <SEO title="About" />
      <Layout>
        <HeadingPrimary>About</HeadingPrimary>
        <br/>
        <Img fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
          Building mr concerns servants in he outlived am breeding. He so lain
          good miss when sell some at if. Told hand so an rich gave next. How
          doubt yet again see son smart. While mirth large of on front. Ye he
          greater related adapted proceed entered an. Through it examine express
          promise no. Past add size game cold girl off how old.
          <br />
          <br />
          Bringing so sociable felicity supplied mr. September suspicion far him
          two acuteness perfectly. Covered as an examine so regular of. Ye
          astonished friendship remarkably no. Window admire matter praise you
          bed whence. Delivered ye sportsmen zealously arranging frankness
          estimable as. Nay any article enabled musical shyness yet sixteen yet
          blushes. Entire its the did figure wonder off.
        </TextBody>
        <ButtonWrapper>
          <a href="mailto:your&#64;email.com">
            <Button>Get in touch</Button>
          </a>
        </ButtonWrapper>
      </Layout>
    </>
  );
}

export default Info;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
