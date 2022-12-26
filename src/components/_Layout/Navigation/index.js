import React from "react"
import NavItems from "./NavItems"
import { RiCloseLine } from "react-icons/ri"
import ButtonBooking from "../../_Atoms/Button/ButtonBooking"
import Telephone from "../../_Atoms/Telephone"
import EmailAddress from "../../_Atoms/EmailAddress"

export default function Navigation(props) {
  const { mobileNavOpen, setMobileNavOpen } = props || {}

  return (
    <div
      className={`fixed h-screen p-8 inset-0 z-50 w-full transform  bg-white lg:translate-x-0 lg:hidden duration-300 ${
        mobileNavOpen ? "translate-x-0 lg:translate-x-full" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setMobileNavOpen(false)}
        className="absolute top-0 right-0 z-10 p-6 text-4xl text-olive"
      >
        <RiCloseLine />
      </button>
      <nav className="mb-8">
        <NavItems setMobileNavOpen={setMobileNavOpen} />
      </nav>
      <ButtonBooking className="text-lg" />
      <div className="flex flex-col gap-4 mt-16 opacity-50">
        <Telephone />
        <EmailAddress />
      </div>
    </div>
  )
}
