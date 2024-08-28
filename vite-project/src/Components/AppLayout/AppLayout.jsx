import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {Outlet} from "react-router-dom"


const AppLayout = () => {
  return (
    <div className='App-Container'>
    <Header/>
   <div className='App-body'>
    <Outlet/>
   </div>
   <Footer/>
</div>
  )
}

export default AppLayout

