import React, { useState } from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation"
import MobileNavButton from "../Navigation/MobileNavButton"
import { StaticImage } from "gatsby-plugin-image"
import EmailAddress from "../../_Atoms/EmailAddress"
import Telephone from "../../_Atoms/Telephone"
import ButtonBooking from "../../_Atoms/Button/ButtonBooking"

export default function Header(props) {
  const { siteTitle } = props || {}

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header class="fixed top-0 left-0 right-0 w-full z-20 border-t-4 border-teal">
      <div className="container block-padding">
        <div className="flex items-center justify-between w-full">
          <Link
            className="flex flex-row items-center gap-4 font-serif text-lg font-bold md:text-xl"
            to="/"
          >
            <StaticImage
              src="../../../images/icon-tree.png"
              alt="Damson Cottage tree icon"
              width="120"
              className="w-full max-w-[60px] md:max-w-full"
              placeholder="blurred"
              loading="eager"
            />
            <div className="flex flex-row gap-2 text-2xl">
              <span className="text-stone-700">Damson</span>
              <span className="text-olive">Cottage</span>
            </div>
          </Link>

          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-row items-center gap-2">
              <EmailAddress
                className="hidden p-4 md:flex hover:text-olive"
                spanClassName="hidden lg:block"
              />

              <Telephone
                className="hidden p-4 md:flex hover:text-olive"
                spanClassName="hidden lg:block"
              />
            </div>

            <ButtonBooking className="hidden lg:flex" />

            <MobileNavButton
              mobileNavOpen={mobileNavOpen}
              setMobileNavOpen={setMobileNavOpen}
            />
          </div>

          <Navigation
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
          />
        </div>
      </div>
    </header>
  )
}
