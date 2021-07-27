import { graphql } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import JournalSide from "../components/navigation/journalSide"
import SubmissionSection from "../components/sections/SubmissionSection"
interface subProps {}

const Submission: FunctionComponent<subProps> = () => {
  return (
    <Layout>
      <Seo title="Submission" />
      <Wrapper>
        <SubmissionSection />
        <JournalSide />
      </Wrapper>
    </Layout>
  )
}

export default Submission

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1000px 500px;
  justify-content: space-between;
  padding: 210px 0 0 0;
  gap: 40px;

  @media (max-width: 640px) {
    padding: 110px 0 0 0;
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
