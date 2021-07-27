import React, { FunctionComponent } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

interface infoProps {}
const InformationSection: FunctionComponent<infoProps> = props => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>{t("INFORMATIONPAGE")}</Title>
          <Subtitle>{t("INFTILE1")}</Subtitle>
          <Description>{t("INFOD1")}</Description>
          <Description>{t("INFOD2")}</Description>
          <Description>{t("INFOD3")}</Description>
          <Subtitle>{t("INFTILE2")}</Subtitle>
          <Description>{t("INFOD4")}</Description>
          <Subtitle>{t("INFTILE3")}</Subtitle>
          <Description>{t("INFOD5")}</Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default InformationSection
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
  margin: 30px 0 0 20px;
  display: grid;
  gap: 30px;
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
