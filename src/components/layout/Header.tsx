import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "styled-components"

interface headerProps {
  homeNav?: {
    homeItem?: string
    homeLink?: string
  }
  aboutNav?: {
    aboutItem?: string
    aboutLink?: string
  }
  announcementNav?: {
    announcementItem?: string
    announcementLink?: string
  }
  publicationsNav?: {
    publicationsItem?: string
    publicationsLink?: string
  }
  submissionNav?: {
    submissionItem?: string
    submissionLink?: string
  }
  teamNav?: {
    teamItem?: string
    teamLink?: string
  }
  indexationNav?: {
    indexationItem?: string
    indexationLink?: string
  }
  informationNav?: {
    informationIem?: string
    informationLink?: string
  }
}

const Header: FunctionComponent<headerProps> = props => {
  const {
    homeNav = { homeItem: "Home", homeLink: "/" },
    aboutNav = { aboutItem: "About", aboutLink: "/about" },
    announcementNav = {
      announcementItem: "Announcement",
      announcementLink: "/announcement",
    },
    publicationsNav = {
      publicationsItem: "Publication",
      publicationsLink: "/publication",
    },
    submissionNav = {
      submissionItem: "Submission",
      submissionLink: "/submission",
    },
    teamNav = { teamItem: "Team", teamLink: "/team" },
    indexationNav = {
      indexationItem: "Indexation",
      indexationLink: "/indexetion",
    },
    informationNav = {
      informationIem: "Information",
      informationLink: "/information",
    },
  } = props

  const { t } = useTranslation()

  return (
    // <HeaderContextProvider.Consumer></HeaderContextProvider.Consumer>
    <Wrapper>
      <WrapperText>
        <Link to={homeNav.homeLink}>{t("HOME")}</Link>
        <Link to={aboutNav.aboutLink}>{t("ABOUT")}</Link>
        <Link to={announcementNav.announcementLink}>{t("ANNOUNCEMENT")}</Link>
        <Link to={publicationsNav.publicationsLink}>{t("PUBLICATIONS")}</Link>
        <Link to={submissionNav.submissionLink}>{t("SUBMISSION")}</Link>
        <Link to={teamNav.teamLink}>{t("EDITORIALBOARD")}</Link>
        <Link to={indexationNav.indexationLink}>{t("INDEXATION")}</Link>
        <Link to={informationNav.informationLink}>{t("INFORMATION")}</Link>
      </WrapperText>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 150px;
  padding: 20px 20px;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(88, 58, 58, 0.1);

  @media (max-width: 640px) {
    display: none;
  }
`
const WrapperText = styled.div`
  display: grid;
  grid-template-columns: 60px 60px 100px 100px 100px 140px 100px 100px;
  gap: 30px;
  justify-content: start;

  a {
    @import url("https://fonts.googleapis.com/css2?family=Adamina&family=Anton&family=Bad+Script&family=Vidaloka&display=swap");
    font-weight: bold;
    font-family: "Adamina", serif;
    font-family: "Anton", sans-serif;
    font-family: "Bad Script", cursive;
    font-family: "Vidaloka", serif;
    color: rgba(1, 1, 1, 0.6);
    text-decoration: none;
  }
`

export default Header
