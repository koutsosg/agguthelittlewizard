import React, { useState } from "react"

const ColoringTemplate = ({ data, location }) => {
  return <div>ahaha</div>
}

export default ColoringTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
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
        description
        videoThumb: vThumb {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 450, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
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
