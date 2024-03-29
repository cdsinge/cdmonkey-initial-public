import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Deep({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
    <div className="blog-posts">
      <p>Anything I create that seems worth sharing.</p>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .filter(post => post.node.frontmatter.path.includes('deeper'))
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h4 style={{marginBottom: "0.2rem"}}>
                <Link paddingTop to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h4>
            </div>
          )
        })}
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query DeepQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
                      ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
