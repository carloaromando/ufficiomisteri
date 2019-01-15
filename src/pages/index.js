import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image";
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  renderImage(post) {
    const img = post.frontmatter.image

    if (!img) return

    if (img.childImageSharp && img.childImageSharp.fluid)
      return <Img fluid={img.childImageSharp.fluid} alt={post.frontmatter.title} />

    return <img className="gif-image" src={img.publicURL} alt={post.frontmatter.title} />
  }
  render() {
    const { data } = this.props
    const hasProjects = data.allMarkdownRemark
    
    let posts = false
    if (hasProjects) {
      posts = data.allMarkdownRemark.edges
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
                    <Link to={post.fields.slug}>
                      {this.renderImage(post)}
                      <h6 className="title title-project is-6">{post.frontmatter.title}</h6>                      
                    </Link>
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
      sort: { order: ASC, fields: [frontmatter___order] },
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
              publicURL
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
