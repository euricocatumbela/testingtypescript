import { useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import { FunctionComponent } from "react"
import styled from "styled-components"

interface heroProps {
  title?: string
}

const HeroEdge: FunctionComponent<heroProps> = prosp => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>{t("HEROEDGE")}</Title>
          <Description>{t("EDGEP")}</Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroEdge

const Wrapper = styled.div`
  display: grid;
`
const ContentWrapper = styled.div``
const TextWrapper = styled.div`
  margin: 180px 0 40px 40px;
`

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  line-height: 120px;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`
const Description = styled.p`
  width: 800px;
  line-height: 30px;
  @media (max-width: 640px) {
    width: 320px;
  }
`
