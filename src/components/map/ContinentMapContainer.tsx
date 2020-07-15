import React, { useEffect, useMemo } from "react"
import Map, { ImageSizeTuple } from "./Map"
import { useMapDispatch, actions } from "context/MapContext"

import { useLeaflet } from "react-leaflet"
import { LatLngBoundsLiteral } from "leaflet"

type ContinentMapContainerProps = {
  children: React.ReactNode
  imageSize: ImageSizeTuple
}

type InnerContainerProps = {
  children: React.ReactNode
}

const InnerContainer = ({ children }: InnerContainerProps) => {
  const leaflet = useLeaflet()
  const dispatch = useMapDispatch()

  useEffect(() => {
    dispatch(actions.mapCtx(leaflet))
  }, [leaflet])

  return <>{children}</>
}

const ContinentMapContainer = ({
  children,
  imageSize,
}: ContinentMapContainerProps) => {
  const imageBounds = useMemo<LatLngBoundsLiteral>(() => [[0, 0], imageSize], [
    imageSize,
  ])

  return (
    <Map bounds={imageBounds}>
      <InnerContainer>{children}</InnerContainer>
    </Map>
  )
}

export default ContinentMapContainer
