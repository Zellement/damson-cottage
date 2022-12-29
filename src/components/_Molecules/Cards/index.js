import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import HTMLContent from "../../../components/_Atoms/Text"
import Button from "../../_Atoms/Button"
import ButtonBooking from "../../_Atoms/Button/ButtonBooking"
import EmblaCarousel from "../EmblaCarousel"

export default function Cards(props) {
  const { block } = props || {}
  return (
    <section
      className={`container grid grid-cols-12 gap-12 block-padding w-full`}
    >
      <ul
        className={`col-span-12 flex flex-col md:flex-row gap-32 md:gap-16 justify-between w-full`}
      >
        {block.cards.map((card) => {
          console.log(card)
          return (
            <li className="flex flex-col w-full text-center">
              <h3 className="relative z-10 m-0 -mb-2.5 text-2xl text-olive">
                {card.brow}
              </h3>
              <GatsbyImage image={card.image.gatsbyImageData} />
              <div className="self-center mt-8">
                {card.useBookingsButton ? (
                  <ButtonBooking />
                ) : (
                  <Button url={card.link?.slug} label={card.buttonText} />
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
