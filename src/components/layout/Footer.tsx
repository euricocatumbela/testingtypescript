import React, { FunctionComponent } from "react"
import styled from "styled-components"

interface footerProps {}
const Footer: FunctionComponent<footerProps> = props => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Revista Científica da Universidade Cuito Cuanavale</Title>
          <Description>ISSN 0000-0000 (Online)</Description>
        </TextWrapper>
        <FileIcon>
          <Icon src="/images/logos/cuito-logo.svg" />
        </FileIcon>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 380px;
  padding: 110px 0;
  width: 100%;
  background: #000000;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 800px auto;

  @media (max-width: 640px) {
    grid-template-columns: 300px;
  }
`
const TextWrapper = styled.div`
  margin-left: 50px;
  line-height: 30px;
`
const Title = styled.h4`
  color: white;
`
const Description = styled.p`
  color: white;
`
const FileIcon = styled.div``
const Icon = styled.img`
  @media (max-width: 640px) {
    margin-left: 50px;
  }
`
export default Footer
