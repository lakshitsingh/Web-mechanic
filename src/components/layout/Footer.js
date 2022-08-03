import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white">
            <div className='row'>
                <div className='col-4 align-self-center'>
                    <h5>FOLLOW US</h5>
                    <i className="bi bi-facebook"></i>
                </div>
                <div className='col-4 align-self-center'>
                    <h5>MORE INFO</h5>
                    <ul>
                        <Link className='nav-Link active mx-0 font-weight-bold route' to={'/about'}><li>About Us</li></Link>
                        <Link className='nav-Link active mx-0 font-weight-bold route' to={'/contact'}><li>Contact Us</li></Link>
                    </ul>
                </div>
                <div className='col-4 align-self-center'>
                    <h5>POLICIES</h5>
                    <ul>
                        <Link className='nav-Link active mx-0 font-weight-bold route' to={'/privacy'}><li>Privacy Policy</li></Link>
                        <Link className='nav-Link active mx-0 font-weight-bold route' to={'/terms'}><li>Terms of Service</li></Link>
                        <Link className='nav-Link active mx-0 font-weight-bold route' to={'/refund'}><li>Refund Policy</li></Link>
                    </ul>
                </div>
            </div>
            <span>WEB WORKER ©</span>
        </div>
    )
}

export default Footer