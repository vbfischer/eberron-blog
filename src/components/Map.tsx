import React, { useContext } from "react"

import {
  Map as LeafletMap,
  ImageOverlay,
  GeoJSON,
  AttributionControl,
} from "react-leaflet"

import { Feature } from "geojson"

import { isDomAvailable } from "lib/util"
import { MapContext } from "context/MapContext"
import NavStrip from "./NavStrip"
import { Path, CRS } from "leaflet"

const bounds: any = [
  [0, 0],
  [3548, 5033],
]
const style = { height: "475px" }

const attribution = `<a href="https://www.google.com">Open Full Map</a>`

const onClick = (e: any) => console.log("e", e.latlng)

type GeoJSONProp = Feature

type MapProps = {
  url: string
  geoJSON: GeoJSONProp
}

const Map = ({ url, geoJSON }: MapProps) => {
  if (!isDomAvailable()) {
    return (
      <div>
        <p>Loading map...</p>
      </div>
    )
  }

  const ctx = useContext(MapContext)

  const { dispatch } = ctx

  const doEachFeature = (feature: any, layer: any) => {
    layer.on("mouseover", () => {
      dispatch({
        type: "HANDLE_HOVER",
        payload: feature?.properties?.nation,
      })

      layer.setStyle({
        opacity: 0.5,
        fillOpacity: 0.5,
      })
    })

    layer.on("mouseout", () => {
      dispatch({
        type: "HANDLE_HOVER",
        payload: "",
      })

      layer.setStyle({
        opacity: 0,
        fillOpacity: 0,
      })
    })
    layer.bindPopup(feature?.properties?.popupContent)
  }

  const defaultStyle = {
    opacity: 0,
    fillOpacity: 0,
  }
  return (
    <>
      <LeafletMap
        crs={CRS.Simple as any}
        minZoom={-2}
        bounds={bounds}
        maxBounds={bounds}
        style={style}
        onclick={onClick}
        attributionControl={false}
      >
        <NavStrip>This is the Nav</NavStrip>

        <AttributionControl prefix={attribution} />
        <ImageOverlay bounds={bounds} url={url} />
        <GeoJSON
          data={geoJSON}
          onEachFeature={doEachFeature}
          style={defaultStyle}
        />
      </LeafletMap>
    </>
  )
}

export default Map
