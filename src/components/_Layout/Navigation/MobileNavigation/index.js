import { Link } from "gatsby"
import React, { useState } from "react"
import primaryNavigation from "/src/helpers/navigation"
import { BsCircleFill } from "react-icons/bs"
import ButtonBooking from "../../../_Atoms/Button/ButtonBooking"
import Telephone from "../../../_Atoms/Telephone"
import EmailAddress from "../../../_Atoms/EmailAddress"
import { RiCloseLine } from "react-icons/ri"

export default function MobileNavigation(props) {
  const { setMobileNavOpen, mobileNavOpen } = props || {}
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
        <ul className={"flex flex-col gap-4"}>
          {primaryNavigation.map((navItem) => {
            return (
              <li key={navItem.url} className={`text-xl`}>
                <Link
                  className="flex flex-row items-center gap-4"
                  onClick={() => {
                    setMobileNavOpen(false)
                  }}
                  activeClassName={"primaryNav-item-is-active"}
                  to={navItem.url}
                >
                  <BsCircleFill className="text-4xs text-stone-300 primaryNav__icon" />
                  {navItem.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <ButtonBooking className="text-lg" />
      <div className="flex flex-col gap-4 mt-16 opacity-50">
        <Telephone />
        <EmailAddress />
      </div>
    </div>
  )
}
