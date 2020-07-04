import React from "react"

import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import { PaperBackgroundQueryQuery } from "types/gatsby-graphql"

type PaperProps = {
  children: React.ReactNode
}
const PaperComponent = ({ children }: PaperProps) => {
  const data = useStaticQuery<PaperBackgroundQueryQuery>(graphql`
    query PaperBackgroundQuery {
      file(base: { eq: "background2.jpg" }) {
        publicURL
      }
    }
  `)

  const Paper = styled.div`
    ${tw`container mx-auto shadow-default overflow-scroll `}
    background-color: #eee5ce;
    background-image: url(${data.file ? data.file.publicURL : ""});
  `

  return <Paper>{children}</Paper>
}

export default PaperComponent
