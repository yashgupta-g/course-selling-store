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
                  <Heading title="courses " />
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex  mx-auto '>
            {this.state.mycourses.map(({ node }) => {
              return (
           
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
