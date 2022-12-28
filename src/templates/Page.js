import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import { graphql } from "gatsby"
import Hero from "../components/_Molecules/Hero"
import MeetYourHosts from "../components/_Molecules/MeetYourHosts"

const TemplatePage = ({ data }) => {
  const post = data.datoCmsPage
  return (
    <>
      <Seo title={post.title} description="Damson Cottage" />
      <section className="container block-padding">
        <Hero post={post} />
      </section>

      <section className="row">
        <div className="container block-padding">
          <Button url={"#"} label={"Button"} />

          <div className="content">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <h2>Lorem ipsum dolor sit amet</h2>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <MeetYourHosts />
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
    }
  }
`
