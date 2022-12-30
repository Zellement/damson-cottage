import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import DesktopNavigation from "../../_Layout/Navigation/DesktopNavigation"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero(props) {
  const { post, homepage } = props || {}
  console.log(post)
  return (
    <div className="relative grid grid-cols-12 lg:gap-12 xl:gap-16 before:col-span-12 before:h-[100px] before:md:h-[130px] before:lg:h-[120px]">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="col-span-12 col-start-1 row-start-2 lg:col-span-6 lg:col-start-4"
        >
          <GatsbyImage
            className="object-cover w-full h-full"
            image={post.heroImage.gatsbyImageData}
            alt={post.heroImage.alt}
          />
        </motion.div>
      </AnimatePresence>
      {homepage ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${post.title}`}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col col-span-10 col-start-2 text-4xl lg:col-span-3 lg:col-start-1"
          >
            <div className="relative flex h-full my-16 text-center lg:my-auto lg:text-left">
              <h1 className="flex flex-col w-full lg:leading-none lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 text-shadow--white">
                <span className="relative z-50 font-serif text-5xl lg:whitespace-nowrap xl:text-6xl">
                  Tranquil B&B
                </span>
                <span className="text-xl leading-normal lg:whitespace-nowrap lg:translate-x-[12rem] xl:translate-x-[14rem] xl:text-2xl text-teal">
                  nestled in the heart
                </span>
                <span className="font-serif text-4xl xl:text-5xl leading-normal lg:whitespace-nowrap lg:translate-x-[6rem]">
                  of the Norfolk Countryside
                </span>
              </h1>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${post.title}`}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col col-span-10 col-start-2 text-4xl lg:col-span-3 lg:col-start-1"
          >
            <div className="flex flex-col gap-4 my-16 text-center lg:my-auto lg:text-left">
              <p className="font-sans text-base text-olive xl:text-lg">
                {post.heroBrow}
              </p>
              <h1 className="text-4xl leading-normal xl:text-5xl 2xl:text-6xl">
                {post.heroPrimary}
              </h1>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      <div className="absolute hidden my-auto pointer-events-none lg:static lg:pointer-events-auto lg:flex lg:col-start-10 lg:col-span-3">
        <DesktopNavigation desktop={true} />
      </div>
    </div>
  )
}
