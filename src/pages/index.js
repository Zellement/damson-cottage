import React from "react"
import Seo from "../components/_Seo"
import { graphql } from "gatsby"
import MeetYourHosts from "../components/_Molecules/MeetYourHosts"
import Hero from "../components/_Molecules/Hero"
import TextContent from "../components/_Molecules/TextContent"
import Gallery from "../components/_Molecules/Gallery"
import Cards from "../components/_Molecules/Cards"

const IndexPage = ({ data }) => {
  const post = data.datoCmsHomepage

  return (
    <>
      <Seo title="Damson Cottage" description="Damson Cottage" />
      <section className="container block-padding">
        <Hero post={post} homepage={true} />
      </section>

      <div className="flex flex-col gap-16 row">
        {post.blocks.map((block) => {
          if (block.model?.apiKey === "block_text_content") {
            return <TextContent key={block.id} block={block} />
          } else if (block.model?.apiKey === "block_gallery") {
            return <Gallery key={block.id} block={block} />
          } else if (block.model?.apiKey === "block_card") {
            return <Cards key={block.id} block={block} />
          }
          return null
        })}
      </div>
      <MeetYourHosts />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    datoCmsHomepage {
      id
      heroImage {
        gatsbyImageData(aspectRatio: 1.2, placeholder: BLURRED)
        alt
      }
      blocks {
        ... on DatoCmsBlockTextContent {
          id
          content
          copyFirst
          imageS {
            alt
            gatsbyImageData(aspectRatio: 1.2, placeholder: BLURRED)
            originalId
          }
          model {
            apiKey
          }
          linkToAnotherPage {
            ... on DatoCmsPage {
              id
              slug
              title
            }
            ... on DatoCmsHomepage {
              id
              model {
                apiKey
              }
            }
          }
        }
        ... on DatoCmsBlockGallery {
          id
          model {
            apiKey
          }
          images {
            gatsbyImageData(aspectRatio: 1.8, placeholder: BLURRED)
          }
        }
        ... on DatoCmsBlockCard {
          id
          model {
            apiKey
          }
          cards {
            brow
            id
            image {
              alt
              gatsbyImageData(aspectRatio: 0.8, placeholder: BLURRED)
              title
              url
            }
            link {
              slug
            }
            useBookingsButton
            buttonText
          }
        }
      }
    }
  }
`
