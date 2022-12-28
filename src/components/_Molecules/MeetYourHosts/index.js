import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import EmmaMatt from "../../../svgs/EmmaMatt"
import HTMLContent from "../../_Atoms/Text"
import Button from "../../_Atoms/Button"
import ButtonBooking from "../../_Atoms/Button/ButtonBooking"

export default function MeetYourHosts() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      datoCmsGlobalOption {
        image {
          gatsbyImageData
          alt
        }
        content
      }
    }
  `)

  return (
    <section className="row">
      <div className="container grid grid-cols-12 gap-16 block-padding md:gap-12 xl:gap-32">
        <div className="col-span-12 md:col-span-4">
          <GatsbyImage
            className="object-cover w-full h-full"
            image={data.datoCmsGlobalOption.image.gatsbyImageData}
            alt={data.datoCmsGlobalOption.image.alt}
          />
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <div className="relative">
            <EmmaMatt className="w-full" />
            <h2 className="absolute text-[8.2vw] -translate-y-4 md:text-[5.5vw] top-0 left-0 text-olive md:-translate-y-4 translate-x-1/3 md:translate-x-1/3 xl:text-[5vw]">
              Meet your Hosts
            </h2>
          </div>
          <div className="flex flex-col gap-8 mx-auto mt-8 max-w-screen-xs">
            <HTMLContent
              className=""
              content={data.datoCmsGlobalOption?.content}
            />
            <div className="flex flex-row gap-4">
              <Button url="/our-story" label="Our Story" />
              <ButtonBooking />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
