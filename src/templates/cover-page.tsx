import React from "react"
import { graphql, Link } from "gatsby"
import { TwoColumnLayout } from "layouts"
import Img from "gatsby-image"

import {
  SEO,
  CenteredContainer,
  HeroImage,
  SidebarContainer,
  SidebarTopContainer,
} from "components"

import styled from "@emotion/styled"
import tw from "twin.macro"

import { CoverPageQuery } from "types/gatsby-graphql"

type PostProps = {
  data: CoverPageQuery
}

type MapImageProps = {
  mapImageFluid?: any
}

const MapImage = ({ mapImageFluid }: MapImageProps) => {
  if (mapImageFluid) {
    return <Img fluid={mapImageFluid} />
  }

  return null
}

const HorizontalLinkMenu = styled(Link)`
  ${tw`px-2 py-2`}
  position: relative;
  text-decoration: none;
  transition: 0.5s;
  opacity: 0.6;
  text-transform: uppercase;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    top: 100%;
    left: 0;
    background: #c05621;
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: right;
  }
  &:hover {
    opacity: 1;

    ::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`

const CoverPage = ({ data }: PostProps) => {
  const post = data.markdownRemark

  const heroImageFluid = post?.frontmatter?.heroImage?.childImageSharp?.fluid
  const mapImage = post?.frontmatter?.mapImage?.childImageSharp?.fluid

  const continents = post?.frontmatter?.world?.geography?.continents ?? []

  const title: string = post?.frontmatter?.title || " "
  const html: string = post?.html || " "

  const countinentsList = continents.map(c => (
    <HorizontalLinkMenu to={c?.fields?.slug ?? ""}>
      {c?.name}
    </HorizontalLinkMenu>
  ))
  return (
    <>
      <SEO title={title} />

      <TwoColumnLayout>
        <HeroImage heroImageFluid={heroImageFluid} />
        <CenteredContainer className="w-2/3">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CenteredContainer>
        <SidebarContainer>
          <SidebarTopContainer>
            <h3>Geogrpahy</h3>
            <h4>Continents of Ebberon</h4>
            <div className="mb-3 pb-1 flex flex-wrap overflow-hidden">
              {countinentsList}
            </div>
            <hr />
            <MapImage mapImageFluid={mapImage} />
          </SidebarTopContainer>
        </SidebarContainer>
      </TwoColumnLayout>
    </>
  )
}

export default CoverPage

export const query = graphql`
  query CoverPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
        world {
          geography {
            continents {
              id
              name
              fields {
                slug
              }
            }
          }
        }
      }
    }
  }
`
