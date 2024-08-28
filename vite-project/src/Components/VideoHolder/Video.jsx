import React from 'react'
import "./Video.css"
import { FaCirclePlay } from "react-icons/fa6";

const Video = () => {
  return (
    <div className='video-container'>
      <div className='video-holder'>
        <div className='pep-interview'>
            <h2 style={{color: "#3BD6FF"}}>INTERVIEWS</h2>
            <h3 style={{color: "white", fontFamily: ""}}>GUARDIOLA DISCUSSES CITY FUTRE AHEAD OF THEIR TOUR</h3>
            <FaCirclePlay  style={{width: "50px", height: "100px", color: "#3BD6FF"}}/>
        </div>
        <div className='tour'></div>
      </div>
    </div>
  )
}

export default Video
