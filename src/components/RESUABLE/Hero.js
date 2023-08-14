import React from 'react'
import BackgroundImage from 'gatsby-background-image'
export default function Hero({img , title, subtitle heroclass}) {
  return (
    <BackgroundImage className={heroclass} fluid={img}>
      
      <div>
         <h1 className='text-light font-weight-bold  text-uppercase'> {title} </h1>
         <h2 className='text-light font-weight-bold  text-uppercase '> {subtitle} </h2>
      </div>
    </BackgroundImage>
  )
}
