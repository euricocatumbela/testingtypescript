import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FunctionComponent } from "react"
import styled from "styled-components"

interface journalsideProps {}

const JournalSide: FunctionComponent<journalsideProps> = props => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <ContentWrapper>
        <JournalInformation>
          <Title>{t("JOURNALINFO")}</Title>
          <Description>ISSN: 0000-0000</Description>
          <Description>Abbreviated Title: OJ</Description>
          <Description>DOI: 10.14207/ejsd</Description>
          <Description>First Published: 1 Sep 2021</Description>
          <Description>Language: Portuguese, English, Spainish </Description>
        </JournalInformation>
        <PageVisitors>
          <Title>{t("PUBLISHED")}</Title>
          <Description>Reasearchers: 8</Description>
        </PageVisitors>
        <Information>
          <Title>{t("INFORMATIONS")}</Title>
          <Link to="/information">{t("WRITTERS")}</Link>
          <Link to="/information">{t("READERS")}</Link>
        </Information>
      </ContentWrapper>
    </Wrapper>
  )
}

export default JournalSide

const Wrapper = styled.div`
  width: 300px;
  height: 700px;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 640px) {
    display: none;
  }
`
const ContentWrapper = styled.div`
  margin: 40px 0 0 0;
  display: grid;
  gap: 60px;
`
const JournalInformation = styled.div`
  display: grid;
  margin-left: 30px;
  line-height: 30px;
`
const PageVisitors = styled.div`
  margin-left: 30px;
  line-height: 30px;
`
const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
const Description = styled.p`
  font-size: 14px;
`
const Information = styled.div`
  margin-left: 30px;
  line-height: 30px;
  display: grid;
  a {
    color: black;
  }
`
