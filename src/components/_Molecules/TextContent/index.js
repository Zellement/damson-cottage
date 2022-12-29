import React from "react"
import HTMLContent from "../../../components/_Atoms/Text"
import { EmblaCarousel } from "../EmblaCarousel"

export default function TextContent(props) {
  const { block } = props || {}
  console.log(block)
  return (
    <div className="container grid grid-cols-12 gap-12 block-padding">
      <div className="col-span-12 content lg:col-span-4 lg:col-start-2">
        <HTMLContent content={block.content} />
      </div>
      <div className="col-span-12 lg:col-span-4 lg:col-start-7">
        <EmblaCarousel slides={block.imageS} />
      </div>
    </div>
  )
}
