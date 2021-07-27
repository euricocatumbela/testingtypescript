import { graphql } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import JournalSide from "../components/navigation/journalSide"
import AnnouncementSection from "../components/sections/AnnouncementSection"
interface pubProps {}

const Publication: FunctionComponent<pubProps> = () => {
  return (
    <Layout>
      <Seo title="Publication" />
      <Wrapper>
        <AnnouncementSection />
        <JournalSide />
      </Wrapper>
    </Layout>
  )
}

export default Publication

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1000px 500px;
  justify-content: space-between;
  padding: 210px 0 0 0;
  gap: 40px;

  @media (max-width: 640px) {
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
