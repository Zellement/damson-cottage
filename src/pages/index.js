import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import DesktopNavigation from "../components/_Layout/Navigation/DesktopNavigation"

const IndexPage = () => {
  return (
    <>
      <Seo title="Damson Cottage" description="Damson Cottage" />
      <section className="container">
        <div className="grid grid-cols-12">
          <h1 className="flex flex-col col-span-10 col-start-2 text-4xl lg:col-span-5 lg:col-start-1">
            <span>Traditional B&B</span>
            <span className="font-sans">nestled in the heart</span>
            <span>of the Norfolk Countryside</span>
          </h1>
          <div className="hidden my-auto lg:flex lg:col-start-9 lg:col-span-4">
            <DesktopNavigation desktop={true} />
          </div>
        </div>
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
