import React, { useContext, useEffect, useState } from "react"

import {
  ImageOverlay as LeafletImageOverlay,
  ImageOverlayOptions as LeafletImageOverlayOptions,
  LatLngBoundsExpression,
  LatLngTuple,
} from "leaflet"
import { LeafletContext } from "context"

export interface ImageOverlayOptions extends LeafletImageOverlayOptions {
  url: string
  bounds?: LatLngBoundsExpression
}

export const useImageTile = ({
  url,
  bounds,
  ...options
}: ImageOverlayOptions) => {
  const [overlay, setOverlay] = useState<LeafletImageOverlay | null>(null)

  useEffect(() => {
    if (bounds) {
      const instance = new LeafletImageOverlay(url, bounds, options)
      setOverlay(instance)
    }
  }, [url, bounds, options])

  return overlay
}

export const ImageOverlay = ({ url }: ImageOverlayOptions) => {
  const context = useContext(LeafletContext)

  useEffect(() => {
    const bounds: LatLngBoundsExpression = [
      [0, 0],
      [3548, 5033],
    ]
    if (context) {
      const imageOverlay = new LeafletImageOverlay(url, bounds)
      imageOverlay.addTo(context.map)
    }
  }, [context])

  return null
}
