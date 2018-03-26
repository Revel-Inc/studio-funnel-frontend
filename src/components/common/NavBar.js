import React from 'react'
import './styling/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar ml-3 py-4'>
      <div className='container'>
        <div className='navbar-branding d-flex align-items-center'>
          <img src='./assets/images/Revel_white-logo.png' className='logo mr-3' />
          <h5 className='text-white my-0 mr-5'>XD Studio</h5>
          <a href='#' className='mr-1 nav-link'>Resources</a>
          <a href='#' className='mr-1 nav-link'>Settings</a>
          <a href='#' className='nav-link'>Tools</a>
        </div>
        <div className='greeting d-flex align-items-center'>
          <p className='text-white my-0 mr-2'>Adam Fisher</p>
          <div className='greeting-initials d-flex justify-content-center align-items-center'>
            <p className='greeting-initials-text my-0'>AF</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
