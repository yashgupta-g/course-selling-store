import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/RESUABLE/Hero"
import Infoblock from "../components/RESUABLE/Infoblock"
import {graphql} from "gatsby"
import Dualinfoblock from "../components/RESUABLE/Dualinfoblock"
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const About = ({data}) => (



  <Layout>
    

     <Hero
    img = {data.img.childImageSharp.fluid}
    title=" i write code" 
    subtitle="buildwithme "
    heroclass="hero-background"
     />



   <Infoblock heading="About Us"/>

<Dualinfoblock heading="Our team"/>



  </Layout>
)

export const query = graphql`

{
  img: file(relativePath : {eq: "about.jpg"}) {
       childImageSharp {
          fluid {
           ...GatsbyImageSharpFluid_tracedSVG
          }
       }
   }
}
`



export default About
