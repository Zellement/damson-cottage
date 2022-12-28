import React from "react"
import HTMLContent from "../../../components/_Atoms/Text"

export default function TextContent(props) {
  const { block } = props || {}
  return (
    <div
      key={block.id}
      className="container grid grid-cols-12 gap-12 block-padding"
    >
      <div className="col-span-12 content md:col-span-4 md:col-start-2">
        <HTMLContent content={block.content} />
      </div>
    </div>
  )
}
