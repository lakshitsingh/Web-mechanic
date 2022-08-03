import React from 'react'
import Category from './Category'

const Section = () => {
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center'>
        <h4 className='m-2'>WE GIVE TRAINING TO PEOPLE</h4>
        <h4 className='m-2'>HERE ARE OUR TRAINING PROGRAM</h4>
        <Category src={"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"WEB DEVLOPMENT"} description={"Learn varius web technologies like MERN MEAN stack & more..."} />
        <Category src={"https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"} heading={"DIGITAL MARKETING"} description={"Learn varius digital marketing stretergies like SEO SEM & more..."} />
        <Category src={"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"MOBILE APPLICATION"} description={"Learn mobile appliction devlopement like andriod & IOS"} />
      </div>
    </div>
  )
}

export default Section