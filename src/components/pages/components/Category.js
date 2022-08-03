import React from 'react'
import { Link } from 'react-router-dom'

const Category = (props) => {
  return (
    <div className="col-4 h-100 my-5" bsstyle="default" style={{ width: "20rem" }}>
      <img src={props.src} className="card-img-top img-fluid mx-0 p=-0"  style={{"height": "30vh"}} alt="..." />
      <div className="card-body p-0 m-1">
        <h5 className="card-title m-1">{props.heading}</h5>
        <p className="card-text m-1">{props.description}</p>
        <Link to='/contact' className="btn btn-primary p-2 m-1">Know More...</Link>
      </div>
    </div>
  )
}

export default Category