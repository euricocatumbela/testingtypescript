import { useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import { FunctionComponent } from "react"
import styled from "styled-components"
import ContactButton from "../button/contactButton"

interface heroProps {
  title?: string
}

const HeroSection: FunctionComponent<heroProps> = prosp => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>{t("HEROTITLE")}</Title>
          <Description>{t("HEROP")}</Description>
          <ContactButton />
        </TextWrapper>
        <FileWrapper>
          <Icon src="https://images.unsplash.com/photo-1590647030647-0bc9c30cc07e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
        </FileWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div``
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 800px auto;
  @media (max-width: 640px) {
    grid-template-columns: 300px;
  }
`
const TextWrapper = styled.div`
  margin: 350px 0 40px 40px;
  @media (max-width: 640px) {
    margin: 100px 0 0px 40px;
  }
`
const FileWrapper = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  line-height: 120px;
  @media (max-width: 640px) {
    font-size: 28px;
  }
`
const Description = styled.p`
  width: 700px;
  line-height: 20px;
  @media (max-width: 640px) {
    width: 300px;
    font-size: 14px;
  }
`
const Icon = styled.img``
