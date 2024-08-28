import "./AuthLayout.css"
import {Outlet} from "react-router-dom"

const AuthLayout = () => {



  return (
   
       <div className='Auth-layout'>
           <div className='header-img'>
               <div className='sign-logo'></div>
                </div>
          <div className='Auth-layout-holder'>

            <Outlet/>
     </div>
</div> 
  )
}

export default AuthLayout







{/* <div
className="Auth-layout"

>
<div className="Auth-layout-holder">
  <Outlet />
</div>
</div> */}