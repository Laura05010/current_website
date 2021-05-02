import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import ArtList from "../components/artList.js"



const ArtPage = () => {

  return(
    <>
    <SEO title="Art 🎨"/>
    <Default></Default>
    <ArtList></ArtList>
    </>
  )
}

export default ArtPage