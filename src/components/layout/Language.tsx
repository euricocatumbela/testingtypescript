import React, { FunctionComponent } from "react"
import styled from "styled-components"
import LanguageSelection from "../navigation/languageSelection"

interface languageProps {
  siteTitle?: string
}
const Language: FunctionComponent<languageProps> = props => {
  const { siteTitle = "Okavango Journal" } = props

  return (
    <Wrapper>
      <WrapperText>
        <Title>{siteTitle}</Title>
      </WrapperText>
      <WrapperContent>
        <LanguageSelection />
      </WrapperContent>
    </Wrapper>
  )
}
export default Language

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  padding: 10px 10px;
  width: 100%;
  background: #00a8e8;
  display: grid;
  grid-template-columns: 400px 200px;
  justify-content: space-between;

  @media (max-width: 640px) {
    grid-template-columns: 300px;
  }
`
const WrapperContent = styled.div``
const WrapperText = styled.div``
const Title = styled.h1`
  color: white;
  margin: 40px 0 40px 40px;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 640px) {
    margin: 20px 0 20px 70px;
    font-size: 22px;
  }
`
