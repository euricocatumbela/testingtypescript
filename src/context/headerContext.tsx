import { createContext, useState } from "react"

export const HeaderContext = createContext

const HeaderContextProvider = props => {
  const [navigation] = useState({
    title: "home",
    link: "link",
  })
  return (
    <HeaderContextProvider value={{ navigation }}>
      {props.children}
    </HeaderContextProvider>
  )
}
