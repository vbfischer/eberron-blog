import React, { createContext, useReducer } from "react"

type MapAction = { type: "hover"; payload: string }

export const reducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "hover":
      return { ...state, hovered: action.payload }
  }
}
