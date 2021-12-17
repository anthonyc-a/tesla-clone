import React from "react"
import Logo from "./Logo/Logo"
import NavActions from "./Navbar/NavActions"
import Navbar from "./Navbar/Navbar"

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <NavActions />
    </header>
  )
}

export default Header
