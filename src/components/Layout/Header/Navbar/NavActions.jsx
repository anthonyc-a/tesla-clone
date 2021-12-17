import React from "react"
import { Link } from "gatsby"

const NavActions = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Support</Link>
          <Link to="/">Shop</Link>
          <Link to="/">Account</Link>
          <Link to="/">Menu</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavActions
