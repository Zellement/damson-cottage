import { Link } from "gatsby"
import React from "react"
import * as styles from "./button.module.css"

export default function ButtonBooking(props) {
  const { className } = props || {}

  return (
    <Link
      to="/bookings/"
      className={`${styles.btn} ${styles["btn__booking"]} ${className}`}
    >
      Start Your Retreat
    </Link>
  )
}
