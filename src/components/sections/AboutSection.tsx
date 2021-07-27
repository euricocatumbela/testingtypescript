import React, { FunctionComponent } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "styled-components"

interface aboutSectionProps {
  // translation: string
}

const AboutSection: FunctionComponent<aboutSectionProps> = props => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>{t("ABOUTPAGE")}</Title>
          <Description>{t("ABOUTD1")}</Description>
          <Description>{t("ABOUTD2")}</Description>
          <Description></Description>
          <List>{t("ABOUTL1")}</List>
          <List>{t("ABOUTL2")}</List>
          <List>{t("ABOUTL3")}</List>
          <List>{t("ABOUTL4")}</List>
          <List>{t("ABOUTL5")}</List>
          <List>{t("ABOUTL6")}</List>
          <List>{t("ABOUTL7")}</List>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default AboutSection
const Wrapper = styled.div`
  margin: 0px 0 0 40px;
  width: 1000px;
  height: 700px;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 640px) {
    width: 350px;
    margin: 0 0 0 12.5px;
    height: 1000px;
  }
`
const ContentWrapper = styled.div``
const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  margin: 20px 0 0 30px;
  @media (max-width: 640px) {
    margin: 20px 0 0 20px;
  }
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`

const Description = styled.p`
  max-width: 900px;
  line-height: 30px;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`
const List = styled.li`
  line-height: 20px;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`
