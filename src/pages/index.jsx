import React from "react"
import SectionFive from "../components/Home/SectionFive"
import SectionFour from "../components/Home/SectionFour"
import SectionOne from "../components/Home/SectionOne"
import SectionSix from "../components/Home/SectionSix"
import SectionThree from "../components/Home/SectionThree"
import SectionTwo from "../components/Home/SectionTwo"
import Layout from "../components/Layout/Layout"
import indexStyles from "../styles/Index.scss"

export default function Home() {
  return (
    <>
      <Layout>
        <div className="home-contain" dir="ltr">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </div>
      </Layout>
    </>
  )
}
