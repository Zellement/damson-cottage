import { Link } from "gatsby"
import React from "react"
import primaryNavigation from "/src/helpers/navigation"
import { AiTwotoneClockCircle } from "react-icons/ai"

export default function NavItems(props) {
  const { setMobileNavOpen, desktop } = props || {}
  return (
    <ul className={"flex flex-col gap-4"}>
      {primaryNavigation.map((navItem) => {
        return (
          <li className="">
            <Link
              className="flex flex-row items-center gap-4"
              onClick={() => {
                setMobileNavOpen(false)
              }}
              activeClassName={"primaryNav-item-is-active"}
              to={navItem.url}
            >
              {desktop ? (
                <AiTwotoneClockCircle className="text-4xs text-stone-400 primaryNav__icon" />
              ) : null}
              {navItem.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
