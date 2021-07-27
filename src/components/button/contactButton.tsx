import { useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import { FunctionComponent } from "react"
import styled from "styled-components"

interface buttonProps {
  title?: string
}

const ContactButton: FunctionComponent<buttonProps> = prosp => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Contact> {t("CONTACTB")}</Contact>
      <InformationButton>{t("CONTACIN")}</InformationButton>
    </Wrapper>
  )
}

export default ContactButton

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  margin-top: 80px;
  @media (max-width: 640px) {
    grid-template-columns: 150px auto;
    gap: 10px;
  }
`
const InformationButton = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 60px;
  border-radius: 5px;
  font-size: 22px;
  display: grid;
  justify-content: center;
  align-items: center;
  color: #00a8e8;
  @media (max-width: 640px) {
    width: 150px;
  }
`
const Contact = styled.div`
  font-size: 22px;
  background: #00a8e8;
  width: 200px;
  height: 60px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.9);

  display: grid;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    width: 150px;
  }
`
