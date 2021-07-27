import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import HeroEdge from "../components/sections/HeroEdge"

interface indexProps {
  title?: string
}
const IndexPage: FunctionComponent<indexProps> = ({ title = "Hola mundo" }) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Seo title="Home" />z
      <HeroSection />
      <HeroEdge />
    </Layout>
  )
}

export default IndexPage
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
