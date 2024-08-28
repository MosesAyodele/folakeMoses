import React from 'react'
import "./Videos.css"
import ReactPlayer from "react-player"
// import loginvideo from '../assets/loginvideo.mp4';

const Videos = () => {
  return (
    <div className='videos-container'>
      <ReactPlayer light={true} controls={true} url={'https://www.youtube.com/watch?v=IMwwV5tizoQ'} style={{height: "900px", width: "900px"}}/>
      {/* <video src={loginvideo}/> */}
    </div>
  )
}

export default Videos
