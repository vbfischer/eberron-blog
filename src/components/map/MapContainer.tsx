import React, {
  MutableRefObject,
  useState,
  useEffect,
  ReactNode,
  useRef,
  useMemo,
} from "react"
import { MapOptions, Map as LeafletMap, CRS } from "leaflet"
import { LeafletProvider } from "context"
import styled from "@emotion/styled"

interface MapContainerProps extends MapOptions {
  children?: ReactNode
  placeholder?: ReactNode
  className?: string
  url: string
}

const MapContainerDefaultProps = {
  zoomSnap: 0.25,
  minZoom: -3,
  attributionControl: false,
  crs: CRS.Simple,
  zoom: -3,
}

const StyledDiv = styled.div``

export const useMapElement = (
  mapRef: MutableRefObject<HTMLElement | null>,
  props: MapContainerProps
): LeafletMap | null => {
  const [map, setMap] = useState<LeafletMap | null>(null)

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new LeafletMap(mapRef.current, props)

      setMap(instance)
    }
  }, [mapRef, map, props])

  useEffect(() => {
    if (map && props.center && props.zoom) {
      map.setView(props.center, props.zoom)
    }
  }, [map, props.center, props.zoom])

  return map
}

export const MapContainer = ({
  children,
  placeholder,
  url,
  className,
  ...options
}: MapContainerProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const map = useMapElement(mapRef, options)
  const context = useMemo(() => (map ? { map } : null), [map])

  const contents = context ? (
    <LeafletProvider value={context}>{children}</LeafletProvider>
  ) : (
    placeholder ?? null
  )

  return (
    <StyledDiv className={className} ref={mapRef}>
      {contents}
    </StyledDiv>
  )
}

MapContainer.defaultProps = MapContainerDefaultProps
