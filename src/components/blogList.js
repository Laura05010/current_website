import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const BlogList = () => {
const data = useStaticQuery(
  graphql`
  query BlogList {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {blog: {eq: true}}, children: {elemMatch: {children: {}}}}) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
                <h2 className="title-article"><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
                <div className="post-date">{node.frontmatter.date} ~ {node.fields.readingTime.text} &nbsp;&nbsp;&nbsp;&nbsp;</div>
                {/* Adds some space for the picture */}
                <br></br>
                <div className="post-image">
                  <Img fluid= {node.frontmatter.image.childImageSharp.fluid} />
                </div>
              </header>
              <p>{node.frontmatter.description} <Link to={node.fields.slug}> [ Read more ...]</Link></p>
            </div>
          </article>
        ))}
      </div>
    </main>
  </>
  )
}

export default BlogList
