import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import nameImg from "../images/My_name.png"

const IndexPage = () => {

  return(
  <>
  	<SEO title="About"/>
    <Default></Default>
    <main className="content">
  		<article className="page-article">
    		<div className="wrap-content">
        	<header className="page-header">
          	<h1 className = "title-article"> Welcome to my world 👩🏻‍💻</h1>
          </header>
          <div className="page-content">
          <h2>Thanks for visiting my site!</h2>
    	<p>My name is <b>Laura</b> and I am currently a second-year/third-year student at the <b>University of Toronto</b> pursuing a Specialist degree in <b>Computer Science.</b></p>
      <p>I have a passion for design, innovation, and helping others! I aspire towards a career where I can work on projects give me the opportunity to positively impact those around me.</p>
      <p>Coding, learning languages, creating and learning from others makes me very happy. I aspire towards a career where I can work on projects that will bring a positive impact to those around me. </p>
      <blockquote>
        <p> "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more."</p>
        <p> - Tony Robbins</p>
      </blockquote>
      <p>When I am not on the computer, I enjoy meditating, drawing, and spending time with my family & friends.</p>
      <br></br>
      <img src={nameImg} className="name_signature"alt="My name signature" width = "200" height = "100" alt="Laura's Signature"></img>
          </div>
        </div>
      </article>
    </main>
  </>
  )
}

export default IndexPage