import React from "react"

import PropTypes from "prop-types"
import BasicLayout from "./BasicLayout"

type SingleColumnLayoutProps = {
  children: React.ReactNode
}

const SingleColumnLayout = ({ children }: SingleColumnLayoutProps) => {
  return (
    <>
      <BasicLayout>{children}</BasicLayout>
    </>
  )
}

SingleColumnLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SingleColumnLayout
