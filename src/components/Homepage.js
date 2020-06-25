import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import homepageVid from "../presswash1 copy.mp4"

function Homepage() {
  return (
    <div className='homepage-container'>
      <header className='homepage-card'>
        <h1>FIRST CHOICE PRESSURE WASHING</h1>

        <nav className='homepage-nav'>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>LOCATIONS</li>
            <li>CONTACT</li>
          </ul>
        </nav>

        <address>
          EMAIL:<a href="">antonio@firstchoice.com</a>
          PHONE:<a href="">123-456-6789</a>
        </address>
      </header>

      <div className='video-container'>
        <video className='homepage-video' autoPlay loop>
          <source src={homepageVid} type='video/mp4' />
        </video>
        <div className='video-overlay'></div>
        <FontAwesomeIcon icon={faChevronDown} className='homepage-arrow'></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Homepage