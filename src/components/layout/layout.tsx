import React, { FunctionComponent, ReactNode } from "react"
import { HeaderContext } from "../../context/headerContext"
import Header from "../layout/Header"
import Footer from "./Footer"
import Language from "./Language"
import "./layout.css"

interface layoutProps {
  children?: ReactNode
}
const Layout: FunctionComponent<layoutProps> = ({ children }) => {
  return (
    <>
      <Language />

      <Header />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
