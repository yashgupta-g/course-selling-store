import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/RESUABLE/Hero"
import Infoblock from "../components/RESUABLE/Infoblock"
import {graphql} from "gatsby"
import Dualinfoblock from "../components/RESUABLE/Dualinfoblock"
import Coursecart from "../components/cart/Coursecart"
import Cards from "../components/RESUABLE/Cards"

const Index = ({ data }) => (
  <Layout>
    <Hero
      img={data.img.childImageSharp.fluid}
      title=" I Write Code"
      subtitle="Build With Me "
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={data.courses} />
    <Dualinfoblock heading="Our team" />
  
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    courses:allContentfulCourses{
    
      edges{
        node {
          id
          title
          price
          description{
            description
          }
       
        }
      }
    }
  }
`



export default Index
