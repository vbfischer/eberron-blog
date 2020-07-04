import { createContext } from "react"
import { Map } from "leaflet"

export interface LeafletContextInterface {
  map: Map
}

export const LeafletContext = createContext<LeafletContextInterface | null>(
  null
)

export const LeafletProvider = LeafletContext.Provider
