import React from "react"
import Footer from "./Footer"

import Header from "./Header"

const Layout = (props) => {
  const { children, location } = props || {}

  return (
    <>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
