import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Musings({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
    <div className="blog-posts">
      <p>Random thoughts that I have on various subjects.  Varying quality.</p>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .filter(post => post.node.frontmatter.path.includes('musings'))
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
  query MusingsQuery {
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
