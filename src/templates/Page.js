import React from "react"
import Seo from "../components/_Seo"
import { graphql } from "gatsby"
import Hero from "../components/_Molecules/Hero"
import TextContent from "../components/_Molecules/TextContent"
import Cards from "../components/_Molecules/Cards"
import Gallery from "../components/_Molecules/Gallery"

const TemplatePage = ({ data }) => {
  const post = data.datoCmsPage
  return (
    <>
      <Seo title={post.title} description="Damson Cottage" />
      <section className="container block-padding">
        <Hero post={post} />
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
    </>
  )
}

export default TemplatePage

export const query = graphql`
  query ($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      id
      slug
      title
      heroPrimary
      heroImage {
        gatsbyImageData(aspectRatio: 1.2, placeholder: BLURRED)
        alt
      }
      heroBrow
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
              title
              slug
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
            alt
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
