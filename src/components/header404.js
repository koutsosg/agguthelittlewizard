import React from "react"
import Navbar from "./Navbar/Navbar"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Header404 = () => {
  const data = useStaticQuery(
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

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
      style={{
        minHeight: "56vh",
        width: "100%",
        backgroundPosition: "bottom center",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
    </BackgroundImage>
  )
}

export default Header404
