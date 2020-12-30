import React from "react"
import Navbar from "./Navbar/Navbar"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Header = () => {
  /*   const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "long_bg.png" }) {
          childImageSharp {
            fluid(maxWidth: 1880, maxHeight: 515, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    `
  )
  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
 */
  return (
    <div
      Tag="section"
      backgroundColor={`#040e18`}
      style={{
        height: "56vh",

        transition: "0.3s background ease",
        background: "url('/long_bg.png') no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
    </div>
  )
}

export default Header
