import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import DesktopNavigation from "../../_Layout/Navigation/DesktopNavigation"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero(props) {
  const { post } = props || {}
  console.log(post)
  return (
    <div className="relative grid grid-cols-12 lg:gap-12 xl:gap-16 before:col-span-12 before:h-[80px] before:md:h-[150px] before:lg:h-[120px]">
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
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="col-span-12 col-start-1 lg:col-span-6 lg:col-start-4 "
        >
          <GatsbyImage
            className="object-cover w-full h-full"
            image={post.heroImage.gatsbyImageData}
            alt={post.heroImage.alt}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute hidden my-auto pointer-events-none lg:static lg:pointer-events-auto lg:flex lg:col-start-10 lg:col-span-3">
        <DesktopNavigation desktop={true} />
      </div>
    </div>
  )
}
