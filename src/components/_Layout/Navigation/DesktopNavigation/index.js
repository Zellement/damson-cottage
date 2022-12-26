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
              className="flex flex-row items-center gap-4 group hover:text-teal"
              activeClassName={"primaryNav-item-is-active"}
              to={navItem.url}
            >
              <BsCircleFill className="transition duration-300 text-4xs text-stone-300 primaryNav__icon group-hover:text-teal" />
              {navItem.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
