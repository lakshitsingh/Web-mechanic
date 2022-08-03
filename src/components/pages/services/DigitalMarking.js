import React from 'react'
import Category from '../components/Category'

const DigitalMarking = () => {
  return (
    <div className='container'>
    <div className='row'>
    <h1>Our Digital Marketing Services</h1>
    <Category src={"https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"Social Media Marketing"} description={"Get customer from Facebook, Instagram, etc to your business"}/>
    <Category src={"https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"SEO"} description={"Rank your website in Google search page"}/>
    <Category src={"https://images.pexels.com/photos/267414/pexels-photo-267414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"SEM"} description={"Boost your website reach"}/>
    <Category src={"https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"CONTENT MARKETING"} description={"Create content for your business"}/>
    <Category src={"https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"DIGITAL MARKETING TOOL"} description={"Get data from our analytics tools"}/>
    <Category src={"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"ECOMMERCE"} description={"Improove online Business"}/>
    <Category src={"https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"} heading={"TRAINING"} description={"Improove your digitamarketing skills"}/>
    <Category src={"https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"Email Marketing"} description={"Grow your business through email marketing"}/>
    </div>
    </div>
  )
}

export default DigitalMarking