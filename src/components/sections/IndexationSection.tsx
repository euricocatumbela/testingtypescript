import React, { FunctionComponent } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

interface indexProps {}
const IndexationSection: FunctionComponent<indexProps> = props => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>{t("INDEXPAGE")}</Title>
          <Description>{t("OPENACESS")}</Description>
          <Description>{t("GOOGLE")}</Description>
          <Description>{t("WEBSCIENCE")}</Description>
          <Description>{t("SCOPUS")}</Description>
          <Description>{t("CAPES")}</Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default IndexationSection
const Wrapper = styled.div`
  margin: 0px 0 0 40px;
  width: 1000px;
  /* height: 700px; */
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 640px) {
    width: 330px;
    margin: 0 0 0 22.5px;
    /* height: 300px; */
  }
`
const ContentWrapper = styled.div``
const TextWrapper = styled.div`
  margin: 30px 0 0 30px;
  display: grid;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`
const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`
const Description = styled.p`
  max-width: 900px;
  line-height: 30px;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`
const List = styled.li`
  line-height: 30px;
`
