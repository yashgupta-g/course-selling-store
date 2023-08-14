import React from 'react'
import BackgroundImage from 'gatsby-background-image'
export default function Hero({img , title,  heroclass}) {
  return (
    <BackgroundImage className={heroclass} fluid={img}>
      
      <div>
         <h1> {title} </h1>
      </div>
    </BackgroundImage>
  )
}
