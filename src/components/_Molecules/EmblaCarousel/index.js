import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { GatsbyImage } from "gatsby-plugin-image"

export const EmblaCarousel = (props) => {
  const [emblaRef] = useEmblaCarousel()
  const { slides } = props || {}

  return (
    <div className="flex h-full embla" ref={emblaRef}>
      <div className="flex embla__container">
        {slides.map((slide) => {
          return (
            <div key={slide.originalId} className="flex embla__slide">
              <GatsbyImage
                className=""
                image={slide.gatsbyImageData}
                alt={slide.alt}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
