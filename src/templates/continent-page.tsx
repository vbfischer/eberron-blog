import React from "react"
import { graphql } from "gatsby"

import { ContinentPageQuery } from "types/gatsby-graphql"

import {
  SEO,
  CenteredContainer,
  HeroImage,
  SidebarContainer,
  SidebarTopContainer,
  HoveredLabel,
  NavStrip,
  ContinentMapContainer,
  MapLayer,
  GeoLayer,
} from "components"
import { TwoColumnLayout } from "layouts"
import { MapContextProvider } from "context/MapContext"
import { AttributionControl, GeoJSON, ImageOverlay } from "react-leaflet"
import { ImageSizeTuple } from "components/map/Map"

type ContinentPageProps = {
  data: ContinentPageQuery
}

const imageSize: ImageSizeTuple = [3548, 5033]

const ContinentPage = ({ data }: ContinentPageProps) => {
  const geoJSON = data.allGeoJson.edges.map(e => e.node)
  const attribution = `<a href="https://www.google.com">Open Full Map</a>`

  const frontmatter = data?.markdownRemark?.frontmatter

  const html = data?.markdownRemark?.html ?? ""
  const title: string = frontmatter?.title || " "
  const heroImageFluid = frontmatter?.heroImage?.childImageSharp?.fluid

  const nations = frontmatter?.continent?.nations || []
  const map = frontmatter?.continent?.map?.childImageSharp?.original

  const { src, height, width }: any = map
  const nationList = nations.map(n => <li key={n?.id}>{n?.name}</li>)

  const doEachFeature = (feature: any, layer: any) => {
    layer.bindPopup(feature?.properties?.popupContent)
  }

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
          <MapContextProvider>
            <SidebarTopContainer>
              <ContinentMapContainer imageSize={[height, width]}>
                <NavStrip>This is the Nav</NavStrip>
                <AttributionControl prefix={attribution} />
                <MapLayer url={src as any} imageSize={[height, width]} />
                <GeoLayer />
                <GeoJSON data={geoJSON as any} onEachFeature={doEachFeature} />
              </ContinentMapContainer>
              <HoveredLabel />
              <h3>Type</h3>
              <p>Continent</p>
              <h3>Nations</h3>
              <ul>{nationList}</ul>
            </SidebarTopContainer>
          </MapContextProvider>
        </SidebarContainer>
      </TwoColumnLayout>
    </>
  )
}

export default ContinentPage

export const query = graphql`
  query ContinentPage($slug: String!) {
    allGeoJson(filter: { properties: { geoType: { eq: "nation" } } }) {
      edges {
        node {
          type
          properties {
            geoType
            nation
            popupContent
          }
          geometry {
            coordinates
            type
          }
        }
      }
    }
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
