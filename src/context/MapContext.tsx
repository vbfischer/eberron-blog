import React, { useReducer, Dispatch, useContext } from "react"
import { createAction, createReducer, ActionType } from "typesafe-actions"
import { createSelector } from "reselect"

import { ImageSizeTuple } from "components/map/Map"
import { LeafletContext } from "react-leaflet"
import { LatLngBoundsLiteral } from "leaflet"

type MapState = {
  hovered: string
  imageSize: ImageSizeTuple
  mapCtx: LeafletContext
}

function createCtx<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>(undefined)
  function useCtx() {
    const c = React.useContext(ctx)
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value")
    return c
  }
  return [useCtx, ctx.Provider] as const // 'as const' makes TypeScript infer a tuple
}

const [useMapState, MapCtxProvider] = createCtx<MapState>()

const [useMapDispatch, MapDispatchContextProvider] = createCtx<
  Dispatch<ActionType<typeof actions>>
>()

const actions = {
  hover: createAction("map/HOVER")<string>(),
  imageSize: createAction("map/IMAGE_SIZE")<ImageSizeTuple>(),
  mapCtx: createAction("map/MAP_CTX")<LeafletContext>(),
}

const initialState = {}

const reducer = createReducer(initialState)
  .handleAction(
    actions.hover,
    (state: MapState, action: ActionType<typeof actions.hover>) => ({
      ...state,
      hovered: action.payload,
    })
  )
  .handleAction(
    actions.imageSize,
    (state: MapState, action: ActionType<typeof actions.imageSize>) => ({
      ...state,
      imageSize: action.payload,
    })
  )
  .handleAction(
    actions.mapCtx,
    (state: MapState, action: ActionType<typeof actions.mapCtx>) => ({
      ...state,
      mapCtx: action.payload,
    })
  )

const MapContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MapCtxProvider value={state as MapState}>
      <MapDispatchContextProvider value={dispatch}>
        {children}
      </MapDispatchContextProvider>
    </MapCtxProvider>
  )
}

const getHover = (state: MapState) => state.hovered
const getImageSize = (state: MapState) => state.imageSize
const getLeafletContext = (state: MapState) => state.mapCtx

const getImageBounds = createSelector(
  [getImageSize],
  imageSize => [[0, 0], imageSize] as LatLngBoundsLiteral
)

export {
  MapContextProvider,
  actions,
  useMapState,
  useMapDispatch,
  getHover,
  getImageSize,
  getImageBounds,
  getLeafletContext,
}
