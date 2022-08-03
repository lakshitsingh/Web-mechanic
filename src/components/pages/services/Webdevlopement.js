import React from 'react'
import Category from '../components/Category'

const Webdevlopement = () => {
  return (
    <div className='container align-self-center my-5'>
    <div className='row align-self-center my-auto'>
    <h1>Our Web Devlopement Services</h1>
    <Category src={"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"FRONT END DEVLOPMENT"} description={"Get front end support for your website"}/>
    <Category src={"https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"BACK END DEVLOPMENT"} description={"Get back end support for your website"}/>
    <Category src={"https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"FULL STACK DEVLOPMENT"} description={"Get full support for your website"}/>
    <Category src={"https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"WEB DESIGNING"} description={"Get best designs for your website"}/>
    <Category src={"https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"API"} description={"Get API spport for your website"}/>
    <Category src={"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"Training"} description={"Learn varius web technologies"}/>
    <Category src={"https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"DATABASE"} description={"Get Database storage for your website"}/>
    <Category src={"https://images.pexels.com/photos/2425567/pexels-photo-2425567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} heading={"SERVER"} description={"Get fast server for your website"}/>
    </div>
    </div>
  )
}

export default Webdevlopement