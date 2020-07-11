import React from "react"

import styled from "@emotion/styled"

type NavStripProps = {
  children: React.ReactNode
}
const StyledNav = styled.div`
  position: absolute;
  top: 10px;
  right: 62px;
  padding: 8px 11px;
  z-index: 10000;
  background-color: #b30000;
  color: white;
`

const NavStrip = ({ children }: NavStripProps) => (
  <StyledNav>{children}</StyledNav>
)

export default NavStrip
