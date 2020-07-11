import React, { useContext } from "react"
import { MapContext } from "context/MapContext"

export default () => {
  const { state } = useContext(MapContext)

  return <div>{state.hovered}</div>
}
