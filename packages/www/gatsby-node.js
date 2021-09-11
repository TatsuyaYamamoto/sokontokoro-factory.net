const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  const posts = result.data.allMarkdownRemark.nodes
  posts.forEach(post => {
    const { id, fields } = post
    const { slug } = fields

    if (slug.startsWith("/afterword")) {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/afterword.tsx`),
        context: {
          id
        }
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: slug
    })
  }
}
