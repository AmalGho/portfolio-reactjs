import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Amal</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>home</li>
            <li>services</li>
            <li>experiences</li>
            <li>portfolio</li>
            <li>testimonials</li>
          </ul>
        </div>
        <button className="button .n-button">
          contact us
        </button>
      </div>
    </div>
  )
}

export default Navbar