import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { GiRotaryPhone } from "react-icons/gi"

export default function Telephone(props) {
  const { className, spanClassName, iconClassName } = props || {}
  const telephone = useStaticQuery(graphql`
    query TelephoneQuery {
      datoCmsGlobalOption {
        telephone
      }
    }
  `)
  if (telephone.datoCmsGlobalOption.telephone) {
    return (
      <a
        className={`${className} flex flex-row items-center gap-2`}
        href={`mailto:${telephone.datoCmsGlobalOption.telephone}`}
      >
        <GiRotaryPhone className={`${iconClassName}`} />{" "}
        <span className={`${spanClassName}`}>
          {telephone.datoCmsGlobalOption.telephone}
        </span>
      </a>
    )
  }
  return null
}
