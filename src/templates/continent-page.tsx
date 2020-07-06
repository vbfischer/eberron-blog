import React from "react"
import { graphql } from "gatsby"

import { ContinentPageQuery } from "types/gatsby-graphql"

import {
  SEO,
  CenteredContainer,
  HeroImage,
  SidebarContainer,
  SidebarTopContainer,
  Map,
} from "components"
import { TwoColumnLayout } from "layouts"

type ContinentPageProps = {
  data: ContinentPageQuery
}

const ContinentPage = ({ data }: ContinentPageProps) => {
  const frontmatter = data?.markdownRemark?.frontmatter

  const html = data?.markdownRemark?.html ?? ""
  const title: string = frontmatter?.title || " "
  const heroImageFluid = frontmatter?.heroImage?.childImageSharp?.fluid

  const nations = frontmatter?.continent?.nations || []
  const map = frontmatter?.continent?.map?.childImageSharp?.original
  console.log("map", map)
  const nationList = nations.map(n => <li key={n?.id}>{n?.name}</li>)
  return (
    <>
      <SEO title={title} />
      <TwoColumnLayout>
        <HeroImage heroImageFluid={heroImageFluid} />

        <CenteredContainer>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CenteredContainer>
        <SidebarContainer>
          <SidebarTopContainer>
            <Map url={map.src} />
            <h3>Type</h3>
            <p>Continent</p>
            <h3>Nations</h3>
            <ul>{nationList}</ul>
          </SidebarTopContainer>
        </SidebarContainer>
      </TwoColumnLayout>
    </>
  )
}

export default ContinentPage

export const query = graphql`
  query ContinentPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        continent {
          map {
            childImageSharp {
              original {
                height
                width
                src
              }
            }
          }
        }
        heroImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mapImage {
          id
          absolutePath
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        continent {
          name
          nations {
            name
            id
          }
        }
      }
    }
  }
`
