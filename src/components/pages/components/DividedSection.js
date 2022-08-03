import React from 'react'
import { Link } from 'react-router-dom'

const DividedSection = (props) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
            <img src={props.src} className="img-fluid" alt="..."/>
            </div>
            <div className='col-6 align-self-center'>
                <h1>{props.heading}</h1>
                <p>{props.description}</p>
                <Link to='/contact' className='btn btn-primary'>Click Here...</Link>
            </div>
        </div>
        <div className='row p-2'>
            <div className='col-6 align-self-center'>
                <h1>{props.heading2}</h1>
                <p>{props.description2}</p>
                <Link to='/contact' className='btn btn-primary'>Click Here...</Link>
            </div>
            <div className='col-6'>
            <img src={props.src2} className="img-fluid" alt="..."/>
            </div>
        </div>
    </div>
  )
}

export default DividedSection