import React from "react"
import Heading from "./Heading"
import "./Dualinfoblock.css"
export default function Dualinfoblock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme ">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              At CodeXo, our success story is woven by the diverse and
              passionate individuals who make up our dedicated team. With a
              shared vision of revolutionizing coding education, each member
              brings unique expertise, creativity, and commitment to the table.
              Together, we work tirelessly to provide an exceptional learning
              experience for our students and foster a thriving community of
              coders. <br></br>
              <br></br>
              While each member of our team brings their own expertise and role
              to the table, we all share a common passion for learning, growth,
              and the transformative power of coding. Together, we believe in
              nurturing a community where curiosity is celebrated, challenges
              are embraced, and achievements are shared. Our team's
              collaborative spirit and commitment to excellence continue to
              drive the CodeXo journey forward, making coding education
              accessible and empowering for all. Join us on this exciting
              adventure of coding exploration, innovation, and discovery.
              Together, we'll unlock the doors to a world of endless
              possibilities. <br></br> <br></br>
              The CodeXo Team
            </p>
          </div>

          <div className="col-4">
                <div className="infocard ">
                  <div className="imgbox  mx-auto">
                     <img src=" https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=600 " />
                     <button className="btn btn-warning mx-suto m-2">
                      Connect
                     </button>
                  </div>
                  <div className="content text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, iusto?
                  </div>
                </div>
              
           
          </div>
        </div>
      </div>
    </section>
  )
}
