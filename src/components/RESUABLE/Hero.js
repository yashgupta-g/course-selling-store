import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import TypeWriterEffect from  'react-typewriter-effect'
export default function Hero({img , title,subtitle, heroclass}) {
  return (
    <BackgroundImage className={heroclass} fluid={img}>
      
      <div>
        <TypeWriterEffect
          startDelay={1000}
          textStyle={{
            fontFamily: "Lucida Console",
            color: " #FFFFFF",
            fontSize: "5em",
          }}
        
          cursorColor="white"
          text={title}
          loop={true}
          nextTextDelay={500}
        />
        <h1 className="text-white text-uppercase text-center display-4">
        {subtitle}
      </h1>
      </div>
    </BackgroundImage>
  )
}
