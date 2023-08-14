import React from 'react'
import Heading from './Heading'
import "./Teamphoto.css"

export default function Teamphoto() {
  return (
    <div className="cardcontainer course  ">
      <div className="container   ">
        <div className="row mx-auto text-center ">
          <div clasName="col-lg-12">
            <div className="section-title text-center">
              <div className="title-text mb50 ">
                <Heading title="Our Team  " className=" text-danger" />
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-between    '>
        <div className="row ">
          <div className="row mb50 col mr-5">
            <div >
              <div className="course xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="trainer-img"
                  />
                </div>
                <div className="desc">
                  <h4>Paul</h4>
                  <p className="mb-2">
                    Lorem ipsum dolor, sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex  ">
          <div className="row mb50 col mr-5   ">
            <div className="  ">
              <div className="course xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                </div>
                <div className="desc">
                  <h4>Lia</h4>
                  <p className="mb-2">
                    Lorem ipsum dolor, sit amet co
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex  ">
          <div className="row mb50 col   ">
            <div className="  ">
              <div className="course xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="trainer-img"
                  />
                </div>
                <div className="desc">
                  <h4>Thomas</h4>
                  <p className="mb-2">
                    Lorem ipsum dolor, sit amet c.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
