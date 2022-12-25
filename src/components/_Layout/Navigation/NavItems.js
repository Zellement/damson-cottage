import { Link } from "gatsby"
import React from "react"
import primaryNavigation from "/src/helpers/navigation"

export default function NavItems(props) {
  const { setMobileNavOpen } = props || {}
  return (
    <ul className={"flex flex-col lg:flex-row gap-4"}>
      {primaryNavigation.map((navItem) => {
        return (
          <li>
            <Link
              className=""
              onClick={() => {
                setMobileNavOpen(false)
              }}
              activeClassName={"primaryNav-item-is-active"}
              to={navItem.url}
            >
              {navItem.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
