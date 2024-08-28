import React from 'react'
import "./Footer.css"
import { FaArrowUp } from "react-icons/fa6";

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='image-holder'> </div>
        <div className='links-holder'>
            <p onClick={scrollToTop}>Back to the top    <FaArrowUp /></p>
            <h5>Manchester City FC Ltd 2024</h5>
        </div>
    </div>
  )
}

export default Footer
