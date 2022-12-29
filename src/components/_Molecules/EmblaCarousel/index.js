import React, { useEffect, useState, useCallback } from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import useEmblaCarousel from "embla-carousel-react"
import { useStaticQuery, graphql } from "gatsby"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="absolute bottom-0 left-0 z-10 p-2 text-2xl transition-all duration-300 bg-white cursor-pointer focus:outline-none focus:bg-teal-200 group max-w-20 embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <FiChevronLeft />
  </button>
)

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="absolute bottom-0 left-0 z-10 p-2 ml-20 text-2xl transition-all duration-300 bg-white cursor-pointer focus:outline-none focus:bg-teal-200 group max-w-20 embla__button embla__button--next "
    onClick={onClick}
    disabled={!enabled}
  >
    <FiChevronRight />
  </button>
)

export default function EmblaCarousel({ images }) {
  const [viewportRef, embla] = useEmblaCarousel()
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  useEffect(() => {
    if (!embla) return
    embla.on("select", onSelect)
    onSelect()
  }, [embla, onSelect])

  if (images.length > 1) {
    return (
      <div className="relative flex h-full embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="h-full embla__container">
            {images.map((image, index) => (
              <div key={index} className=" embla__slide embla__slide--gallery">
                <GatsbyImage
                  image={image.gatsbyImageData}
                  key={index}
                  alt={image.alt ? image.alt : "Zuckermaus Bakery"}
                  className="block object-cover w-full h-full mb-px"
                />
                <span className="absolute bottom-0 right-0 z-20 p-2 text-sm text-teal-500 bg-white font-display">
                  {("0" + (index + 1)).slice(-2)}
                </span>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    )
  } else if (images.length === 1) {
    return (
      <>
        <div className="relative flex h-full embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="h-full embla__container">
              {images.map((image, index) => (
                <div
                  key={index}
                  transition="easeInOut"
                  className="block embla__slide embla__slide--gallery"
                >
                  <GatsbyImage
                    image={image.gatsbyImageData}
                    key={index}
                    alt={image.alt ? image.alt : "Zuckermaus Bakery"}
                    className="block object-cover w-full h-full mb-px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return null
  }
}
