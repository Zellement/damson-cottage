import { Link } from "gatsby"
import React from "react"
import primaryNavigation from "/src/helpers/navigation"
import { BsCircleFill } from "react-icons/bs"

export default function NavItems(props) {
  const { setMobileNavOpen, desktop } = props || {}
  return (
    <ul className={"flex flex-col gap-4"}>
      {primaryNavigation.map((navItem) => {
        return (
          <li className={`${desktop ? "" : "text-xl"}`}>
            <Link
              className="flex flex-row items-center gap-4"
              onClick={() => {
                setMobileNavOpen(false)
              }}
              activeClassName={"primaryNav-item-is-active"}
              to={navItem.url}
            >
              {desktop ? (
                <BsCircleFill className="text-4xs text-stone-300 primaryNav__icon" />
              ) : null}
              {navItem.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
