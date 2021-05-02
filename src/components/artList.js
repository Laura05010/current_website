import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ArtList = () => {
const data = useStaticQuery(
  graphql`
  query ArtList {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {blog: {eq: false}}, children: {elemMatch: {children: {}}}}) {
      edges {
        node {
          frontmatter {
            title
            image{
              childImageSharp{
                fluid(maxHeight:500, maxWidth: 1000, quality:100){
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
            description
          }
          html
        }
      }
    }

  }
`
)

  const { allMarkdownRemark } = data
  return(
  <>
    <main role="main">
      <div className="content">
        {allMarkdownRemark.edges.map(({ node }) => (
          <article className="main-article">
            <div className="wrap-content">
              <header className="header-article">
                <h2 className="title-article">{node.frontmatter.title}</h2>
                <div className="post-image">
                  <Img fluid= {node.frontmatter.image.childImageSharp.fluid} />
                </div>
              </header>
              <p>{node.frontmatter.description}</p>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          </article>
        ))}
      </div>
    </main>
  </>
  )
}

export default ArtList
