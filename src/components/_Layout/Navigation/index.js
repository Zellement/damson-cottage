import React from "react"
import { Link } from "gatsby"
import NavItems from "./NavItems"

export default function Navigation(props) {
  const { mobileNavOpen, setMobileNavOpen } = props || {}

  return (
    <nav
      className={`fixed h-screen p-8 inset-0 z-50 w-full transform  bg-white lg:translate-x-0 lg:hidden duration-300 ${
        mobileNavOpen ? "translate-x-0 lg:translate-x-full" : "translate-x-full"
      }`}
    >
      <NavItems setMobileNavOpen={setMobileNavOpen} />
    </nav>
  )
}
