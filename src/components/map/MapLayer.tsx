import React, { useEffect, useMemo } from "react"

import { ImageOverlay } from "react-leaflet"
import { ImageSizeTuple } from "./Map"
import { actions, useMapDispatch } from "context/MapContext"

type MapLayerProps = {
  url: string
  imageSize: ImageSizeTuple
}

const MapLayer = ({ url, imageSize }: MapLayerProps) => {
  const dispatch = useMapDispatch()

  const imageBounds: any = useMemo(() => [[0, 0], imageSize], [imageSize, url])

  console.log("dispatch", dispatch)
  useEffect(() => {
    dispatch(actions.imageSize(imageSize))
  }, [imageSize])
  return <ImageOverlay bounds={imageBounds as any} url={url} />
}

export { MapLayer }
