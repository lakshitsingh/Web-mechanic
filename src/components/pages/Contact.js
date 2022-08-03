import React from 'react'

const Contact = () => {
  return (
    <div classNameName='m-5'>
      <h1>CONTACT US</h1>
      <p>Feel free to fill out the form below to get in touch with us or email us directly at support@webworker.in or you can send us WhatsApp SMS on +91-866891343249.</p>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">First Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" /><br /><br /><br />
        <label for="exampleFormControlInput1" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" /><br /><br /><br />
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /><br /><br /><br />
        <label for="exampleFormControlInput1" className="form-label">Phone</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone" /><br /><br /><br />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button className='btn btn-primary' onClick={()=> alert("Your request submited succesfully")}>Submit</button>
    </div>
  )
}

export default Contact