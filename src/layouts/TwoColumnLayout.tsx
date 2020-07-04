import React from "react"

import PropTypes from "prop-types"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { Background, Paper } from "components"

import BasicLayout from "./BasicLayout"

type TwoColumnLayoutProps = {
  children: React.ReactNode
}

const BasicTwoColumnLayout = styled.div`
  ${tw`flex flex-wrap`}
`

const TwoColumnLayout = ({ children }: TwoColumnLayoutProps) => {
  return (
    <>
      <Background>
        <Paper>
          <BasicTwoColumnLayout>{children}</BasicTwoColumnLayout>
        </Paper>
      </Background>
    </>
  )
}

TwoColumnLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TwoColumnLayout
