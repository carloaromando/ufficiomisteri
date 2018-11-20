import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image";
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  renderImage(post) {
    if (!post.frontmatter.image) return

    return (
      <Link to={post.fields.slug}>
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} />
      </Link>
    )
  }
  render() {
    const { data } = this.props
    const hasProjects = data.allMarkdownRemark
    
    let posts = false
    if (hasProjects) {
      posts = data.allMarkdownRemark.edges
      posts.sort((a, b) => (a.node.frontmatter.order > b.node.frontmatter.order) ? 1 : ((b.node.frontmatter.order > a.node.frontmatter.order) ? -1 : 0))
      console.log(posts)
    }

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {hasProjects && posts
                .map(({ node: post }) => (
                  <div
                    className="column is-one-third"
                    key={post.id}
                  >
                    {this.renderImage(post)}
                  </div>
                ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            order
          }
        }
      }
    }
  }
`
