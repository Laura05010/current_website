import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import nameImg from "../images/signature.png"

const IndexPage = () => {
  return (
    <>
      <SEO title="About" />
      <Default></Default>
      <main className="content">
        <article className="page-article">
          <div className="wrap-content">
            <header className="page-header">
              <h1 className="title-article"> Welcome to my world 👩🏻‍💻</h1>
            </header>
            <div className="page-content">
              <h2>Thank you for visiting my site!</h2>
              <p>
                Hello, I'm <b>Laura</b>, currently in my fourth year at the{" "}
                <b>University of Toronto</b>, pursuing a Specialist degree in{" "}
                <b>Computer Science</b>. While I'm just one course away from
                completing a minor in Mathematics, my primary focus and passion
                lie in exploring the realms of <b>Computer Vision, Robotics,</b>{" "}
                and <b>Machine Learning</b> through my specialization.
              </p>

              {/* <p>I have a passion for design, innovation, and helping others! I aspire towards a career where I can work on projects that give me the opportunity to positively impact those around me.</p>
      <p>Coding, learning languages, creating and learning from others makes me very happy. I aspire towards a career where I can work on projects that will bring a positive impact to those around me. </p> */}
              <p>
                {" "}
                Initially,my journey started in my local robotics club, sparking
                my passion for design and innovation through soldering and
                Arduino projects. Simultaneously, I worked on a women's sports
                app that taught me to persevere and confidently pitch an idea to
                others. Initially, I focused on robotics courses in university,
                but my curiosity led me to explore various aspects of computer
                science. This journey culminated in a profound interest in
                Computer Vision.{" "}
              </p>

              <p>
                Throughout my degree, I pursued to be an engineer with diverse
                experience, expanding my skills through TA-ing, internships, and
                university clubs. As a teaching assistant, I was determined to
                share my passion for computer science and make the content clear
                and fun for students. Diverse internships exposed me to backend,
                frontend, and mobile engineering culminating in a my project
                using the RoomPlanAPI last summer, where I witnessed the
                impactful role of Computer Vision in the real state industry.
              </p>

              <p>
                Last semester, implementing a tool to assist blind rock climbers
                with 2 other students strengthened my belief in technology's
                positive influence. The concept of modeling our world with
                Computer Vision deepened my interest in the field.
              </p>
              <p>
                I'm incredibly grateful for those who have been part of my
                journey and have given me an opportunity. I hope to do the same
                by helping others along the way!
              </p>

              <blockquote>
                <p>
                  {" "}
                  "Life is a gift, and it offers us the privilege, opportunity,
                  and responsibility to give something back by becoming more."
                </p>
                <p> - Tony Robbins</p>
              </blockquote>
              <p>
                When I am not on the computer, I enjoy rock climbing, drawing,
                and spending time with my family & friends.
              </p>
              <br></br>
              <img
                src={nameImg}
                className="name_signature"
                alt="My name signature"
                width="300"
                height="200"
                alt="Laura's Signature"
              ></img>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default IndexPage
