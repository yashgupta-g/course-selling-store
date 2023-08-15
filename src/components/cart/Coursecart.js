import React, { Component } from 'react'
import Heading from '../RESUABLE/Heading'
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
      <div className="container course ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <Heading title="Courses  " />
                </div>
              </div>
            </div>
          </div>

          <div className=" row  ">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div key={node.id} className=" row mb50 col d-flex mx-auto  ">
                  <div className="card">
                    <div className="imgbox mx-auto">
                      <h4 className=" font-weight-bold  text-light text-uppercase p-3 mx-auto  ">
                        {node.title}
                      </h4>
                      <div className="row d-flex justify-content-center">
                        <button className=" btn btn-warning snipcart-add-item  m-3 ">
                          View More
                        </button>

                        <span className="wave emoji m-4 ">😀</span>
                      </div>
                    </div>
                    <div className="content">
                      <div>
                        <p className="mb-2">{node.description.description}</p>
                        <h3 className="mb-4 text-light font-weight-bold">
                          $ {node.price}/-
                        </h3>
                        <button
                          data-item-id={node.id}
                          data-item-price={node.price}
                          data-item-name={node.title}
                          data-item-url="www.google.com"
                          className=" btn btn-info snipcart-add-item "
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
