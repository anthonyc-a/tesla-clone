import React from "react"
import { IoChevronDown } from "react-icons/io5"

const SectionOne = () => {
  return (
    <div className="home-section section-one">
      <div className="home-title">
        <h1>Model 3</h1>
        <h2>
          1% Company Car Tax. <a href="/">Learn More</a>
        </h2>
      </div>
      <div className="home-cta hero-cta">
        <a href="/" className="cta-btn">Custom Order</a>
        <a href="/" className="cta-btn btn-2">Available Inventory</a>
      </div>
      <div className="hero-scroll">
        <a href="/">Schedule a Touchless Test Drive</a>
        <IoChevronDown size={36} />
      </div>
    </div>
  )
}

export default SectionOne
