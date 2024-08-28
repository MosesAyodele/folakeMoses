import React from 'react'
import "./Help.css"
import { CiSearch } from "react-icons/ci";
import { IoTicketSharp } from "react-icons/io5";
import { MdAirplaneTicket } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { MdRememberMe } from "react-icons/md";
import { FaPeopleRobbery } from "react-icons/fa6";
import { MdStadium } from "react-icons/md";
import { IoFootball } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BsBagPlusFill } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { SiDinersclub } from "react-icons/si";
import { FaMicrophoneAlt } from "react-icons/fa";

const Help = () => {
  return (
    <div className='help-container'>
      <div className='help-header'>
        <p style={{color: "white", fontSize: "30px", fontWeight: "600", fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>HOW CAN WE HELP YOU ?</p>
        <div style={{backgroundColor: "white", width: "25%", height: "10%", display: "flex",border: "2px solid #90C4E2", borderRadius: "5px"}}>
        <CiSearch  style={{fontSize: "30px", width: "40px" }}/>
        <input type="text" placeholder=''  style={{ width: "100%", width: "100%", border: "none", fontSize: "20px"}} />
        </div>
      </div>
      <div className='help-body'>
        <section>
            <div>
                 <MdAirplaneTicket  style={{fontSize: "40px", color: "#90C4E2"}}/>
                <p>Season Tickets</p>
            </div>
            <div>
            <IoTicketSharp  style={{fontSize: "40px"  }}/>
            <p>Match Tickets</p>
            </div>
            <div>
                <FaHospitalUser  style={{fontSize: "40px" , color: "#90C4E2"}}/>
                <p>Hospitality</p>
            </div>
            <div>
                <GiTrophyCup style={{fontSize: "40px"}} />
                <p>Tours</p>
            </div>
        </section>
        <section>
        <div>
             <FaMicrophoneAlt  style={{fontSize: "40px" , color: "#90C4E2"}}/>
            <p>Concerts at the Etihad</p>
        </div>
            <div>
                 <MdRememberMe  style={{fontSize: "40px"}}/>
                <p>Memberships</p>
            </div>
            <div> 
                 <FaPeopleRobbery  style={{fontSize: "40px"}}/>
                <p>Fans &S Supporters Clubs</p>
            </div>
            <div>
                  <MdStadium  style={{fontSize: "40px" , color: "#90C4E2"}}/>
                <p>Visiting the Stadium</p>
            </div>
        </section>
        <section>
        <div>
             <IoFootball  style={{fontSize: "40px"}}/>
            <p>Learn Football</p>
        </div>
            <div>
                 <MdAccountBox  style={{fontSize: "40px" , color: "#90C4E2"}}/>
                <p>My Account</p>
            </div>
            <div>
                <MdOutlinePhoneIphone  style={{fontSize: "40px"}}/>
                <p>Mobile Tickets</p>
            </div>
            <div>
                <CgWebsite  style={{fontSize: "40px"}}/>
                <p>Apps & Websites</p>
            </div>
        </section>
        <section>
            <div> 
                 <BsBagPlusFill  style={{fontSize: "40px"}}/>
                <p>Conference & Events</p>
            </div>
            <div>
               <BiSolidShoppingBags  style={{fontSize: "40px"}}/>
                <p>Official Store</p>
            </div>
            <div>
              <FcEnteringHeavenAlive  style={{fontSize: "40px"}}/>
                <p>Co-op Live</p>
            </div>
            <div> 
            <SiDinersclub  style={{fontSize: "40px"}}/>
                <p>Clubs & Others</p>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Help
