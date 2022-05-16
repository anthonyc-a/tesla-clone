import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Electric Cars, Solar & Clean Energy | Tesla</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
