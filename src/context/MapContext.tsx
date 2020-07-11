import React, { createContext, useReducer, Dispatch } from "react"

export enum Types {
  HandleHover = "HANDLE_HOVER",
}

type MapState = {
  hovered: string
}

const initialState: MapState = {
  hovered: "",
}

export type MapAction = { type: "HANDLE_HOVER"; payload: string }

export const MapContext = createContext<{
  state: MapState
  dispatch: Dispatch<MapAction>
}>({ state: initialState, dispatch: () => null })

const reducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case Types.HandleHover:
      return { ...state, hovered: action.payload }
    default:
      throw new Error()
  }
}

export const MapContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MapContext.Provider value={{ state, dispatch }}>
      {children}
    </MapContext.Provider>
  )
}
