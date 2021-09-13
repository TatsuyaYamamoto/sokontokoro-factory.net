const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { siteMetadata } = require(`./gatsby-config`)

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

exports.onCreatePage = async (params, pluginOptions) => {
  const { actions, page } = params
  const { createPage } = actions
  const i18n = siteMetadata.i18n
  i18n.languages.map(lang => {
    const path =
      lang === i18n.defaultLanguage ? page.path : `/${lang}${page.path}`

    createPage({
      ...page,
      path,
      context: {
        ...page.context,
        originalPath: page.path,
        i18n: {
          language: lang,
          supportLanguages: i18n.languages,
          defaultLanguage: i18n.defaultLanguage
        }
      }
    })
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
