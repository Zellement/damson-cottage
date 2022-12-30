import React from "react"
import HTMLContent from "../../../components/_Atoms/Text"
import Button from "../../_Atoms/Button"
import EmblaCarousel from "../EmblaCarousel"

export default function TextContent(props) {
  const { block } = props || {}
  return (
    <section className={`container grid grid-cols-12 gap-12 block-padding`}>
      <div
        className={`col-span-12 flex content lg:col-span-4  lg:row-start-1 ${
          block.copyFirst ? "lg:col-start-2" : "lg:col-start-7"
        }`}
      >
        <div className="flex flex-col w-full gap-8 my-auto">
          <HTMLContent className="w-full" content={block.content} />
          {block.linkToAnotherPage ? (
            block.linkToAnotherPage.slug ? (
              <Button
                className="self-start"
                url={block.linkToAnotherPage.slug}
                label={block.linkToAnotherPage.title}
              />
            ) : (
              <Button
                className="self-start"
                url="/"
                label="Go to the Homepage"
              />
            )
          ) : null}
        </div>
      </div>
      <div
        className={`col-span-12 lg:col-span-4  lg:row-start-1 ${
          block.copyFirst ? "lg:col-start-7" : "lg:col-start-2"
        }`}
      >
        <EmblaCarousel images={block.imageS} />
      </div>
    </section>
  )
}
