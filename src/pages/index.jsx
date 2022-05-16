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
  const ref = React.useRef()
  const [pageCounter, setPageCounter] = React.useState(1)

  React.useEffect(() => {
    const scrollListener = () => {
      setPageCounter(0)
      console.log(pageCounter)

      if (window.pageYOffset >= ref.current.offsetHeight / 3) {
        setPageCounter(1)
        console.log(pageCounter)
      }

      if (window.pageYOffset >= ref.current.offsetHeight / 3 * 2) {
        setPageCounter(2)
        console.log(pageCounter)
      }

      if (window.pageYOffset >= ref.current.offsetHeight / 3 * 3) {
        setPageCounter(3)
        console.log(pageCounter)
      }

      if (window.pageYOffset >= ref.current.offsetHeight / 3 * 4) {
        setPageCounter(4)
        console.log(pageCounter)
      }
      
      if (window.pageYOffset >= ref.current.offsetHeight / 3 * 5) {
        setPageCounter(5)
        console.log(pageCounter)
      }
    }

    window.addEventListener("scroll", scrollListener, false)

    return () => window.removeEventListener("scroll", scrollListener, false)
  }, [pageCounter])

  return (
    <>
      <Layout>
        <div
          className="home-contain"
          dir="ltr"
          style={{
            transform: `translateY(-${ref.current?.offsetHeight * pageCounter}px)`,
          }}
        >
          <div ref={ref}>
            <SectionOne />
          </div>
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
