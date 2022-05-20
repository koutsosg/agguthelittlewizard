import React from "react"
import Navbar from "./Navbar/Navbar"
import Headroom from "react-headroom"
const Header = () => {
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
      <Headroom>
        <Navbar />
      </Headroom>
    </div>
  )
}

export default Header
