import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { MainPlayer } from "../components/VideoResalt"
import { mainVid } from "../components/api"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ImgMenu from "../components/imgMenu"

const LyricHead = styled.header`
  letter-spacing: 2px;
  margin-left: 10%;
  margin-right: 10%;
`

const AgguIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  /*   const posts = data.allMarkdownRemark.nodes */
  const [vidId, setVidID] = useState()

  useEffect(() => {
    mainVid("UCL2uSUlDuokoNRae9rPLrAw")
      .then(r => r.json())

      .then(({ items }) =>
        setVidID(items[0].link.substr(items[0].link.indexOf("=") + 1))
      )
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Aggu The Little Wizard || Nursery Rhymes" />
      <LyricHead>
        <h1 className="text-center">Stay Tuned</h1>
      </LyricHead>
      <MainPlayer vidId={vidId} />
      <ImgMenu />
    </Layout>
  )
}

export default AgguIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
