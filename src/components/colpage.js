import React from "react"
import Img from "gatsby-image"
const ColPage = ({ cThumb, title, lineArt, colId }) => (
  <div
    style={{
      margin: "auto",
      objectFit: "contain",
      maxWidth: "600px",
    }}
  >
    <a id={colId} href={lineArt} download>
      <Img
        style={{
          margin: "auto",
          objectFit: "none !important",
          maxWidth: "600px",
          borderRadius: "1.25rem",
        }}
        className={"img-thumbnail category-tile bordrud"}
        fluid={cThumb}
        title="Click to download"
        alt={"Aggu " + title + " coloring page thumbnail"}
      />
    </a>
  </div>
)

export default ColPage
