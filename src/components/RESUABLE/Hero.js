import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import  "./Hero.css"

export default function Hero({img , title, subtitle, heroclass}) {
  return (
    <BackgroundImage className={heroclass} fluid={img}>

         <h1 className=' p-30 text-light font-weight-bold  text-uppercase'> {title} </h1>
         <h2 className='  font-weight-bold  text-uppercase color'> {subtitle} </h2>
    </BackgroundImage>
  )
}
