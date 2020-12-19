// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-shadow: 1px 1px 1px #000000;
  text-decoration: none;
  font-family: balooregular;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1.5rem;
  :hover {
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    ppadding: 10px 0;
    font-size: 1.8rem;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" className="aColor">
        Home
      </NavItem>
      <NavItem to="/lyrics" className="bColor">
        Songs
      </NavItem>
      <NavItem to="/colorings" className="cColor">
        Downloads
      </NavItem>
      <NavItem to="/about" className="dColor">
        About
      </NavItem>
    </>
  )
}

export default NavbarLinks
