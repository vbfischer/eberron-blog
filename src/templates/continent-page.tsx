import React from "react"
import { graphql } from "gatsby"

import { ContinentPageQuery, ImageSharp, NationsJson } from "types/gatsby-graphql"

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
import { AttributionControl, GeoJSON } from "react-leaflet"

type ContinentPageProps = {
  data: ContinentPageQuery
}

type ImageProps = {
  childImageSharp: ImageSharp
}

type DataProps = {
  title: string
  heroImage: ImageProps
  continent: {
    nations: any
    map: {
      childImageSharp: {
        fixed: {
          src: string
          width: number
          height: number
        }
      }
    }
  }
}

const ContinentPage = ({ data }: ContinentPageProps) => {
  console.log("DATA", data)

  const geoJSON = data.allGeoJson.edges.map(e => e.node)

  const attribution = `<a href="https://www.google.com">Open Full Map</a>`

  const {
    title,
    heroImage: {
      childImageSharp: { fluid: heroImageFluid },
    },
    continent: {
      nations,
      map: {
        childImageSharp: {
          fixed: { src, height, width },
        },
      },
    },
  } = data!.markdownRemark!.frontmatter as DataProps

  const html = data!.markdownRemark!.html ?? ""

  const nationList = nations.map(n: NationsJson => <li key={n!.id}>{n!.name}</li>)

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
              fixed(pngCompressionSpeed: 10, width: 5033) {
                width
                src
                height
                aspectRatio
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
