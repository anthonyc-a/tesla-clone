import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Model S</Link>
        </li>
        <li>
          <Link to="/">Model 3</Link>
        </li>
        <li>
          <Link to="/">Model X</Link>
        </li>
        <li>
          <Link to="/">Model Y</Link>
        </li>
        <li>
          <Link to="/">Powerwall</Link>
        </li>
        <li>
          <Link to="/">Charging</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
