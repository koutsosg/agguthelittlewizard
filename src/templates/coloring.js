import React from "react"
import { Link, graphql } from "gatsby"
import ColPage from "../components/colpage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const ColoringTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        /* featuredImage={post.frontmatter.vThumb.publicURL} */
      />
      <ColPage
        lineArt={post.frontmatter.coloringThumb.publicURL}
        title={post.frontmatter.title}
        cThumb={post.frontmatter.coloringThumb.childImageSharp.fluid}
      />
      <nav className="lyrics-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {next && (
              <Link
                style={{
                  fontFamily: `balooregular`,
                  color: `#fcff00`,
                  fontSize: `1.4rem`,
                }}
                to={`/coloring${next.fields.slug}`}
                rel="next"
              >
                <FontAwesomeIcon icon={faArrowLeft} /> {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link
                style={{
                  fontFamily: `balooregular`,
                  color: `#fcff00`,
                  fontSize: `1.4rem`,
                }}
                to={`/coloring${previous.fields.slug}`}
                rel="prev"
              >
                {previous.frontmatter.title}{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default ColoringTemplate

export const pageQuery = graphql`
  query BlogPostBySlug2(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        coloringThumb: cThumb {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 424, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
        videoSrcURL
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
