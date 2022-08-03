import React from 'react'
import DigitalMarking from './DigitalMarking'
import MobileAppilication from './MobileAppilication'
import Training from './Training'
import Webdevlopement from './Webdevlopement'

const Services = () => {
  return (
    <div className='container'>
      <div className='row'>
      <h1>Our Services</h1>
        <DigitalMarking />
        <MobileAppilication />
        <Training />
        <Webdevlopement />
      </div>
    </div>
  )
}

export default Services