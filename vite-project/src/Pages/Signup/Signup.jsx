import React, { useState , useContext} from 'react'
import "./Signup.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/ContextProvider';



const Signup = () => {

    const [seePassword, setSeePassword] = useState (false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const { register } = useContext(AuthContext);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
    };
  

  const handleSignup = (e) => {
    e.preventDefault();
    register(formData);
    navigate("/auth/login")
  };

  return (
    <div className="Sign_Card">
    <h2 style={{width: "30%", height: "8%", backgroundColor: "#001838", color: "#98C5E9", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"}}>REGISTER</h2>
    <form  onSubmit={handleSignup}>
    <input placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required={true} />
        <input placeholder="firstName" type="text" required={true} name="firstName"   value={formData.firstName} onChange={handleChange}/>
        <input placeholder="lastName" type="text" required={true} name="lastName"  value={formData.lastName} onChange={handleChange} />
    
        <input placeholder="date of Birth" type="date" />
        <input placeholder="Phone Number" type="number" name="Phone Number" autoComplete="off" />
        <div>
        <input placeholder="password" name="password" type={seePassword? "text":"password"}  required={true} value={formData.password} onChange={handleChange} />
        {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
        </div>
        <button type="submit">REGISTER</button>
    </form>
    <p>Already have an account? <span><Link to="/auth/login">REGISTER</Link></span></p>
</div>
  )
}

export default Signup
