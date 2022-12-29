import React from "react"
import EmblaCarousel from "../EmblaCarousel"

export default function TextContent(props) {
  const { block } = props || {}
  return (
    <section className={`container grid grid-cols-12 gap-12 block-padding`}>
      <div className={`col-span-10 col-start-2`}>
        <EmblaCarousel images={block.images} />
      </div>
    </section>
  )
}
