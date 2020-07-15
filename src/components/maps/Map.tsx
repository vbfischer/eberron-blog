import React from "react"

import { Map as LeafletMap } from "react-leaflet"

import { isDomAvailable } from "/lib/util"
import { CRS } from "leaflet"
import { MapProps as LeafletMapProps } from "react-leaflet"

const style = { height: "475px" }

interface MapProps extends LeafletMapProps {
  children: React.ReactNode
}

const defaultMapProps = {
  minZoom: -2,
  attributionControl: false,
  crs: CRS.Simple as any,
}

const Map = ({ children, ...rest }: MapProps) => {
  if (!isDomAvailable()) {
    return (
      <div>
        <p>Loading map...</p>
      </div>
    )
  }

  return (
    <>
      <LeafletMap style={style} {...rest}>
        {children}
      </LeafletMap>
    </>
  )
}

Map.defaultProps = defaultMapProps

export default Map
