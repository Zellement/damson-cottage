import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import MobileNavButton from "../Header/MobileNavButton"
import { StaticImage } from "gatsby-plugin-image"
import EmailAddress from "../../_Atoms/EmailAddress"
import Telephone from "../../_Atoms/Telephone"
import ButtonBooking from "../../_Atoms/Button/ButtonBooking"
import MobileNavigation from "../Navigation/MobileNavigation"

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 w-full bg-white transition-transform duration-700 border-t-4 bg-opacity-80 border-teal backdrop-blur-md`}
    >
      <div className="container block-padding">
        <div className="flex items-center justify-between w-full">
          <Link className="flex flex-row items-center gap-4 font-serif" to="/">
            <StaticImage
              src="../../../images/icon-tree.png"
              alt="Damson Cottage tree icon"
              width={120}
              className={`transition-all ${
                scrollDirection === "down" ? "w-24" : "w-32 md:w-40 lg:w-48"
              }`}
              placeholder="blurred"
              loading="eager"
            />
            <div
              className={`flex flex-row gap-2 transition-all duration-1000 ${
                scrollDirection === "down" ? "text-lg" : "text-2xl "
              }`}
            >
              <span>Damson</span>
              <span className="text-olive">Cottage</span>
            </div>
          </Link>

          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-row items-center gap-2">
              <EmailAddress
                className="hidden p-4 md:flex hover:text-olive"
                spanClassName="hidden lg:block"
                iconClassName=" lg:text-olive"
              />

              <Telephone
                className="hidden p-4 md:flex hover:text-olive"
                spanClassName="hidden lg:block "
                iconClassName=" lg:text-olive"
              />
            </div>

            <ButtonBooking className="hidden md:flex" />

            <MobileNavButton
              mobileNavOpen={mobileNavOpen}
              setMobileNavOpen={setMobileNavOpen}
            />
          </div>

          <MobileNavigation
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
          />
        </div>
      </div>
    </header>
  )
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener("scroll", updateScrollDirection) // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection) // clean up
    }
  }, [scrollDirection])

  return scrollDirection
}
