import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import { graphql } from "gatsby"
import Hero from "../components/_Molecules/Hero"

const IndexPage = ({ data }) => {
  const post = data.datoCmsHomepage

  console.log(data)

  return (
    <>
      <Seo title="Damson Cottage" description="Damson Cottage" />
      <section className="container block-padding">
        <Hero post={post} homepage={true} />
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
      }
    }
  }
`
