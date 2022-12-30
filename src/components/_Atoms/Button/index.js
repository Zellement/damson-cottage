import { Link } from "gatsby"
import React from "react"
import * as styles from "./button.module.css"

export default function Button(props) {
  const { url, label, className } = props || {}

  return (
    <Link to={url} className={`${styles.btn} ${className}`}>
      {label}
    </Link>
  )
}
