import { StaticImage } from "gatsby-plugin-image"
import primaryNavigation from "/src/helpers/navigation"
import React from "react"
import { Link } from "gatsby"
import { BsCircleFill } from "react-icons/bs"
import ButtonBooking from "../../_Atoms/Button/ButtonBooking"

export default function Footer() {
  return (
    <footer className="border-t-4 border-teal">
      <div className="container flex flex-col items-center justify-between gap-8 block-padding lg:flex-row">
        <StaticImage
          src="../../../images/icon-tree.png"
          alt="Damson Cottage tree icon"
          width={120}
          className="w-40"
          placeholder="blurred"
        />
        <nav>
          <ul className="flex flex-col items-center gap-4 lg:gap-8 xl:gap-12 lg:flex-row">
            {primaryNavigation.map((navItem) => {
              return (
                <li key={navItem.url}>
                  <Link
                    className="flex flex-row items-center gap-4 group hover:text-teal"
                    activeClassName={"primaryNav-item-is-active"}
                    to={navItem.url}
                  >
                    {navItem.name}
                  </Link>
                </li>
              )
            })}
            <li>
              <ButtonBooking />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
