import React from "react"

import Header from "./Header"

const Layout = (props) => {
  const { children, location } = props || {}

  return (
    <>
      <Header />
      <main className="relative">{children}</main>
    </>
  )
}

export default Layout
