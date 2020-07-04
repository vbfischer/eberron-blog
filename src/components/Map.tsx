import React, { useRef } from "react"

import { isDomAvailable } from "lib/util"

import { Map as BaseMap } from "react-leaflet"

const Map = ({ children }) => {
  const mapRef = useRef()

  const mapClassName = "map"

  if (!isDomAvailable()) {
    return (
      <div className={mapClassName}>
        <p className="map-loading">Loading map...</p>
      </div>
    )
  }
  return (
    <div className={mapClassName}>
      <BaseMap ref={mapRef}>{children}</BaseMap>
    </div>
  )
}

export default Map
