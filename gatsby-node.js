require("dotenv").config()

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        pages: allDatoCmsPage {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.pages.edges.forEach(({ node }) => {
    createPage({
      path: node.slug + "/",
      component: require.resolve(`./src/templates/Page.js`),
      context: { slug: node.slug },
    })
  })
}
