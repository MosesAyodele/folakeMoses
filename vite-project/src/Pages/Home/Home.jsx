import React from 'react'
// import Video from './';
// import TeamNews from '../Home';
import Video from '../../Components/VideoHolder/Video';
import TeamNews from '../../Components/TeamNews/TeamNews';


const Home = () => {
    return (
        <div className='App-body'>
            <div className="app-bbody-wrapper">
                <Video />
                <TeamNews />
            </div>
        </div>
    )
}

export default Home
