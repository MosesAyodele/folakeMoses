import React from 'react'
import "./Club.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoFootballSharp } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Club = () => {
  return (
    <div className='club-container'>
      <div className='club-header'>
        <h1 style={{color: "white"}}>CLUB</h1>
        </div>
         <div className='club-body'>
          <div className='article'>
            <section style={{backgroundColor: "#001838"}}>
            <IoFootballSharp  style={{fontSize: "50px", color: "#90C4E2"}}/>
              <p style={{color: "white"}}> FOOTBALL SCHOOLS  <FaArrowRight   style={{color: "#90C4E2"}}/></p>
            </section>
            <section >
            <IoBagCheck  style={{fontSize: "40px"}}/>
              <h3>CAREERS</h3>
              <p style={{fontSize: "13px"}}>Current vacancies at the club</p>
            </section>
            <section>
              <h3>ONE CLUB FOR ALL</h3>
              <p style={{fontSize: "13px"}}>learn about us</p>
            </section>
            <section>
              <h3>OUR HISTORY</h3>
              <p style={{fontSize: "13px"}}>Read all about us</p>
            </section>
          </div>
          <div className='text'>
            <h3>OUR HOME</h3>
            <p>Find out how to get to the Etihad, events, tours and more about the home of Manchester City.</p>
          </div>
          <div className='img-direction'>
            <div className='img-holder'></div>
            <div>
            <FaLocationDot  style={{color: "#98C5E9", fontSize: "35px"}}/>
            <h3>VISITING THE ETIHAD STADIUM</h3>
            <p>All you need to know about visitng the etihad stadium</p>
            <a> Find out more</a>
            </div>
          </div>
          <footer></footer>
         </div>
    </div>
  )
}

export default Club
 