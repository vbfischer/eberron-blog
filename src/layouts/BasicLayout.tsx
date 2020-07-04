import React from "react"

import { Background, Paper } from "components"

type BasicLayoutProps = {
  children: React.ReactNode
}
const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <>
      <Background>
        <Paper>{children}</Paper>
      </Background>
    </>
  )
}

export default BasicLayout
