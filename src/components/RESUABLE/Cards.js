import React from 'react'
import "./Cards.css"
export default function Cards() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="imgbox"></div>
          <div className="content">
            <div id="hiden">
              <p className="card-text ">Some quick example textontent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
