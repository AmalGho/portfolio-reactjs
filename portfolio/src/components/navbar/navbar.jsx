import React from 'react'
import Toggle from '../Toggle/Toggle'
import './navbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Amal</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>

            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
              <li>home</li>
            </Link>
            <Link spy={true} to='services' smooth={true} >
              <li>services</li>
            </Link>
            <Link spy={true} to='experiences' smooth={true} >
              <li>experiences</li>
            </Link>
            <Link spy={true} to='portfolio' smooth={true} >
              <li>portfolio</li>
            </Link>
            <Link spy={true} to='testimonials' smooth={true} >
              <li>testimonials</li>
            </Link>

          </ul>
        </div>
        <button className="button .n-button">
          contact
        </button>
      </div>
    </div>
  )
}

export default Navbar