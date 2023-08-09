import React from 'react'

export default function Heading({title}) {
  return (
    <div className="row">
      <div className="col text-center-mb-4">
        <h1 className="display-3 d-flex mb-5 justify-content-center">{title}</h1>
      </div>
    </div>
  )
}
