import { graphql } from "gatsby"
import React from "react"
import { FunctionComponent } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import AboutSection from "../components/sections/AboutSection"
import JournalSide from "../components/navigation/journalSide"

interface aboutProps {}

const About: FunctionComponent<aboutProps> = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <AboutSection />
        <JournalSide />
      </Wrapper>
    </Layout>
  )
}
export default About

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1000px 500px;
  justify-content: space-between;
  padding: 210px 0 0 0;
  gap: 40px;

  @media (max-width: 640px) {
    padding: 130px 0 0 0;
    grid-template-columns: 500px;
  }
`
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
