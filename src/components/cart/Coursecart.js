import React, { Component } from 'react'
import Heading from '../RESUABLE/Heading'
import Img from 'gatsby-image'
import "./Coursecart.css"

export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
    }
  }
  render() {
    console.log(this.state.courses)
    return (
      <div class="cardcontainer course ">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center">
                <div class="title-text mb50">
                  <Heading title="Courses " />
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex  mx-auto '>
            {this.state.mycourses.map(({ node }) => {
              return (
                <div key={node.id} class="row mb50 col  d-flex  mx-auto  ">
                  <div class="  ">
                    <div class="course xs-mb30">
                      <div class="spk-img">
                        <img
                          class="img-fluid"
                          src="https://mcdn.wallpapersafari.com/medium/84/10/boxwcT.jpg"
                          alt="trainer-img"
                        />
                        <div className='centered text-uppercase  '>
                      <h2 className=' font-weight-bold  text-light  '> {node.title}</h2>  
                        </div>
                      </div>
                      <div class="desc">
                        <p className='mb-2'>{node.description.description}</p>
                        <h3 className='mb-4'>INR {node.price} -/</h3>
                        <button
                    data-item-id={Node.id}
                    data-item-price={Node.price}
                    data-item-name={Node.name}
                    className=" btn btn-primary "
                  >
                    Add to cart
                  </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
