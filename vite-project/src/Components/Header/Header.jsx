import React, { useContext, useState  } from 'react'
import "./Header.css"
import { FaUserLarge } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/ContextProvider';




const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useContext(AuthContext);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <div className='header-container'>
        <div className='header-wrapper'>
            <div className='header-logo'></div>
            <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
              <ul>
                <NavLink to="/" style={({isActive})=> isActive ? {color: "white"}:{color: "black"}}><li>HOME</li></NavLink>
                <NavLink to= '/videos' style={({isActive})=> isActive ? {color: "white"}:{color: "black"}}><li>VIDEO</li></NavLink>
                <NavLink to= '/gallery' style={({isActive})=> isActive ? {color: "white"}:{color: "black"}}><li>GALLERY</li></NavLink>
                <NavLink to= '/players' style={({isActive})=> isActive ? {color: "white"}:{color: "black"}}><li>PLAYERS</li></NavLink>
                <NavLink to= '/club' style={({isActive})=> isActive ? {color: "white"}:{color: "black"}}><li>CLUB</li></NavLink>
                <NavLink to= '/help' style={({isActive})=> isActive ? {color: "white"}:{color: "black"}}><li>HELP</li></NavLink>
             </ul>
         </nav>

        <section>
            <div className='language'>
                <CiGlobe  style={{fontSize: "20px"}}/>
                <p>EN</p>
                <hr/>
            </div>

               <div className='login-user'>
                    {isAuthenticated ? (
                   <div onClick={handleLogout}>
                           {/* <p>LOGOUT</p> */}
                              <FaUserLarge style={{ fontSize: '15px' }} />
                     </div>
                            ) : (
                         <div onClick={() => navigate('/auth/login')}>
                             {/* <p>LOGIN</p> */}
                             <FaUserLarge style={{ fontSize: '15px' }} />
                          </div>
                         )}
               </div>
        </section>

        </div>
      
    </div>
  )
}

export default Header


