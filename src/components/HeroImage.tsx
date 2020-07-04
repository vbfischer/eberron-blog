import React from "react"
import Img from "gatsby-image"

type HeroImageProps = {
  heroImageFluid?: any
}

const HeroImage = ({ heroImageFluid }: HeroImageProps) => {
  if (heroImageFluid) {
    return <Img fluid={heroImageFluid} className="w-full" />
  }

  return null
}

export default HeroImage
