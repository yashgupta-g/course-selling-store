import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby';

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4 ">
      <div className="container justify-center">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm mx-auto text-center">
            <p className="lead text-white mb-4">
            Welcome to CodeXo, your ultimate destination for unlocking the world of coding and programming excellence! At CodeXo, we are passionate about empowering individuals to master the art of coding and embrace the boundless opportunities it offers in the digital age.

Our mission at CodeXo is to make coding education accessible, engaging, and transformative. We believe that coding is more than just a skill – it's a key that opens doors to innovation, problem-solving, and creativity. Through our carefully crafted courses and comprehensive learning resources, we strive to ignite the spark of curiosity and equip learners of all backgrounds with the tools they need to thrive in a technology-driven world.
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
