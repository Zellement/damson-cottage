import { Link } from "gatsby"
import React from "react"
import primaryNavigation from "/src/helpers/navigation"
import { BsCircleFill } from "react-icons/bs"

export default function DesktopNavigation() {
  return (
    <ul className={"flex flex-col gap-4"}>
      {primaryNavigation.map((navItem) => {
        return (
          <li key={navItem.url}>
            <Link
              className="flex flex-row items-center gap-4"
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
  )
}
