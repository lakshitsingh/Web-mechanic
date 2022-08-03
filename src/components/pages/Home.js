import React from 'react'
import { Link } from "react-router-dom"
import Section from './components/Section'
import DividedSection from './components/DividedSection'

const Home = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-white">
                    <div className="carousel-item active position-relative">
                        <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                        <div className="position-absolute top-50 start-50 translate-middle p-3 mb-2 bg-dark text-white opacity-25">
                            <h1>To CREATE WEBSITE</h1>
                            <Link className='btn btn-primary' to="/webdev">Click Here...</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                        <div className="position-absolute top-50 start-50 translate-middle p-3 mb-2 bg-dark text-white opacity-25">
                            <h1>For TRAINING PROGRAM</h1>
                            <Link className='btn btn-primary' to="/training">Click Here...</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/4947187/pexels-photo-4947187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                        <div className="position-absolute top-50 start-50 translate-middle p-3 mb-2 bg-dark text-white opacity-25">
                            <h1>DIGITAL MARKETING SERVICES</h1>
                            <Link className='btn btn-primary' to="/digitalmarketing">Click Here...</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='m-5'>
            <Section />
            </div>
            <h1 className='m-5'>INNOVATIVE & CREATIVE IDEAS</h1>
            <p className='m-5'>Our main aim is to offer our customers the most trendy, unique, and innovative service, that you can't find in the market.<br />
                We provide you the ability to discover, share, and buy quality service advanced technologies.</p>
            <DividedSection heading={"Contact Us"} heading2={"Customer Support"} description={"We have 24 X 7 Customer Support"} description2={"Check Our customer Feedback"} src={"https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} src2={"https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"} />
            <h1 className='m-5'>Our Office</h1>
            <p className='m-5'>Banglore,Karnatka, India, 560049</p>
        </>
    )
}

export default Home