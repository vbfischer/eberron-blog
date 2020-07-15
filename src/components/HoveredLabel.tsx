import React from "react"
import { useMapState } from "context/MapContext"

export default () => {
  const state = useMapState()

  return <div>{state.hovered}</div>
}
