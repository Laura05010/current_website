import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub, FaEnvelope, FaRegSmile} from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby"
import resumePDF from "../pages/resume/resume.pdf"



const SideBar = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              github
              email
              linkedin
            }
          }
        }
      }
    `
  )
  const github = "https://github.com/Laura05010"
  // const email = "mailto:" + site.siteMetadata.social.email
  const email = "mailto:lcmmadrid5@gmail.com"
  const linkedin = "https://www.linkedin.com/in/laurammadrid/"
  // const resume = "/resume"

  return (
  <aside className="sidebar">

  <div className="sidebar-container">
    <div className="sidebar-logo">
      <Link to="/" className="logo">{ site.siteMetadata.title}</Link>
    </div>

    <menu className="sidebar-menu">
      <li className="menu-items"><Link to="/" className="menu-links" activeClassName="active">About</Link></li>
      {/* To use the markdown version instead... */}
      <li className="menu-items"><Link to="/projects" className="menu-links" activeClassName="active">Projects</Link></li>
      {/* <li className="menu-items"><Link to="projects.js" className="menu-links" activeClassName="active">Projects</Link></li> */}
      <li className="menu-items"><Link to="/notes" className="menu-links" activeClassName="active">Notes</Link></li>
      <li className="menu-items"><Link to="/art" className="menu-links" activeClassName="active">Art</Link></li>
      <li className="menu-items"><Link to="/perspective" className="menu-links" activeClassName="active">Perspective</Link></li>
      {/* <li className="menu-items"><Link to="/contact" className="menu-links" activeClassName="active">Contact</Link></li> */}
    </menu>

    {/* For the menu to display on mobile */}
    <div className="btn-group">
      <Link to="/" className="mob-menu-items" activeClassName="active"><button className="navbtn">About</button></Link>
      {/* To use the markdown version instead... */}
      <Link to="/projects" className="mob-menu-items" activeClassName="active"><button className="navbtn">Projects</button></Link>
      {/* <Link to="projects.js" className="mob-menu-items" activeClassName="active"><button className="navbtn">Projects</button></Link> */}
      <Link to="/notes" className="mob-menu-items" activeClassName="active"><button className="navbtn">Notes</button></Link>
      <Link to="/art" className="mob-menu-items" activeClassName="active"><button className="navbtn">Art</button></Link>
      <Link to="/perspective" className="mob-menu-items" activeClassName="active"><button className="navbtn">Perspective</button></Link>
    </div>

    <div className="sidebar-social">
      <li className="social-items"><a href={linkedin} className="social-links" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icons"/></a></li>
      <li className="social-items"><a href={github} className="social-links" target="_blank" rel="noopener noreferrer"><FaGithub className="social-icons"/></a></li>
      <li className="social-items"><a href={email} className="social-links" target="_blank" rel="noopener noreferrer"><FaEnvelope className="social-icons"/></a></li>
      <li className="social-items"><a href={resumePDF} className="social-links" target="_blank" rel="noopener noreferrer"><FaRegSmile className="social-icons"/></a></li>
    </div>

  </div>
</aside>
)
}

export default SideBar