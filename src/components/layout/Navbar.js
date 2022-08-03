import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { auth, link } = useSelector((state) => state.auth);

  useEffect(() => {

//getting data for search from server

    fetch("http://localhost:3004/Service")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [])


  //filtering the data according to search term

  const searchFilter = data.filter((val) => {
    if (searchTerm === "") {
      return val
    }
    if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  }).map((val, i) => {
    return <li className=" row searchResult dropdown-item" key={i}>
      <Link className='nav-Link active mx-2 font-weight-bold route m-0 p-0 text-dark' to={val.route}>{val.name}</Link>
    </li>
  })

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">WEB WORKER</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav mr-auto" style={{ "width": "30vw" }}>
                <li className="nav-item">
                  <Link className="nav-Link active font-weight-bold route" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-Link dropdown-toggle mx-2 font-weight-bold route" to="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SERVICES
                  </Link>
                  <ul className="dropdown-menu m-0 p-0" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item mx-2 font-weight-bold route m-0 p-0" to="/training">TRAINING</Link></li>
                    <li><Link className="dropdown-item mx-2 font-weight-bold route m-0 p-0" to="/webdev">WEB DEVELOPMENT</Link></li>
                    <li><Link className="dropdown-item mx-2 font-weight-bold route m-0 p-0" to="/digitalmarketing">DIGITAL MARKETING</Link></li>
                    <li><Link className="dropdown-item mx-2 font-weight-bold route m-0 p-0" to="/mobileapp">MOBILE APPLICATION DEVELOPMENT</Link></li>
                  </ul>
                </li>
                <li className="nav-item m-0 p-0">
                  <Link className="nav-Link mx-2 font-weight-bold route m-0 p-0" to="/about">About</Link>
                </li>
                <li className="nav-item m-0 p-0">
                  <Link className="nav-Link mx-2 font-weight-bold route m-0 p-0" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          <div className='col-3 m-0 p-0'>
            <form className="d-flex m-0 p-0" style={{ "height": "5vh" }}>
              <input className="form-control me-2 row m-0 p-0" type="search" placeholder="Search" aria-label="Search" onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} />
            </form>
          </div>
          <div className='col-3 m-0 p-0'>
            <Link className="btn btn-outline-success mr-0" to={link}>{auth}</Link>
          </div>
      </nav>
      <ul className='dorpdown-menu'>
        {
          searchTerm===''?null:searchFilter.length===0?<div>item not found</div>:searchFilter
        }
      </ul>
    </>
  )
}

export default Navbar