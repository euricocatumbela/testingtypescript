import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { useI18next } from "gatsby-plugin-react-i18next"
import { Link } from "gatsby"
import { flags } from "../../data/Flag"
interface languageProps {}
const LanguageSelection: FunctionComponent<languageProps> = props => {
  const { languages, changeLanguage } = useI18next()

  return (
    <Wrapper>
      <Flag>
        {flags.map(flag => (
          <Icon src={flag.icon} />
        ))}
      </Flag>

      <Content>
        {languages.map(language => (
          <Items key={language}>
            <Link
              to="#"
              onClick={event => {
                event.preventDefault()
                changeLanguage(language)
              }}
            >
              {language}
            </Link>
          </Items>
        ))}
      </Content>
    </Wrapper>
  )
}

export default LanguageSelection
const Wrapper = styled.div`
  width: 120px;
  height: 130px;
  background: white;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  border-radius: 10px;
  @media (max-width: 640px) {
    display: none;
  }
`
const Items = styled.div`
  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
  }
`
const Content = styled.div`
  display: grid;
  margin-top: 18px;
`
const Flag = styled.div`
  display: grid;
  margin: 12px 0 0px 10px;
`
const Icon = styled.img`
  width: 25px;
`
