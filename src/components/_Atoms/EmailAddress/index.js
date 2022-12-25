import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { HiMail } from "react-icons/hi"

export default function EmailAddress(props) {
  const { className, spanClassName, iconClassName } = props || {}
  const emailAddress = useStaticQuery(graphql`
    query EmailQuery {
      datoCmsGlobalOption {
        emailAddress
      }
    }
  `)
  if (emailAddress.datoCmsGlobalOption.emailAddress) {
    return (
      <a
        className={`${className} flex flex-row items-center gap-2`}
        href={`mailto:${emailAddress.datoCmsGlobalOption.emailAddress}`}
      >
        <HiMail className={`${iconClassName}`} />{" "}
        <span className={`${spanClassName}`}>
          {emailAddress.datoCmsGlobalOption.emailAddress}
        </span>
      </a>
    )
  }
  return null
}
