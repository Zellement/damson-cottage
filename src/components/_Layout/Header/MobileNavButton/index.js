import React from "react"
import { RiMenu3Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"

export default function MobileNavButton(props) {
  const { mobileNavOpen, setMobileNavOpen } = props || {}

  return (
    <button
      aria-label="Navigation menu button"
      tabIndex={0}
      className={` text-olive-500 p-2 bg-white lg:hidden text-xl rounded-2xl border-2 border-olive-500`}
      onClick={() => {
        setMobileNavOpen(!mobileNavOpen)
      }}
    >
      {mobileNavOpen ? <IoMdClose /> : <RiMenu3Line />}
    </button>
  )
}
