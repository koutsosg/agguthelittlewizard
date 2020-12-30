import React from "react"
import Navbar from "./Navbar/Navbar"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Header404 = () => {
  /*  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "404.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
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
        background: "url('/404.png') no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
    </div>
  )
}

export default Header404
