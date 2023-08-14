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
      <div className="cardcontainer course ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <Heading title="Courses  "  />
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex  mx-auto '>
            {this.state.mycourses.map(({ node }) => {
              return (
                <div key={node.id} className="row mb50 col  d-flex  mx-auto  ">
                  <div className="  ">
                    <div className="course xs-mb30">
                      <div className="spk-img">
                        <img
                          className="img-fluid"
                          src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30731.jpg?size=626&ext=jpg&ga=GA1.2.289557629.1691966195&semt=ais"
                          alt="trainer-img"
                        />
                        <div className="centered text-uppercase  ">
                          <h2 className=" font-weight-bold  text-light  ">
                            {" "}
                            {node.title}
                          </h2>
                        </div>
                      </div>
                      <div className="desc">
                        <p className="mb-2">{node.description.description}</p>
                        <h3 className="mb-4 text-success font-weight-bold">
                          $ {node.price}/-
                        </h3>

                        <button
                          data-item-id={node.id}
                          data-item-price={node.price}
                          data-item-name={node.title}
                          data-item-url="www.google.com"
                          className=" btn btn-primary snipcart-add-item "
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
