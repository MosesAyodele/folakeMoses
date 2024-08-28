import React, { useState, useContext } from 'react'
import "./Login.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/ContextProvider';


const Login = () => {

    const [seePassword, setSeePassword] = useState(false);
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/');
   
  };

  return (
    <div className="Login_Card">
       <h2 style={{width: "30%", height: "8%", backgroundColor: "#001838", color: "#98C5E9", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"}}>SIGN IN</h2>

    <form onSubmit={handleLogin}>
        <input placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
        <div>
        <input placeholder="password"  type={seePassword? "text" :"password"} value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
        {seePassword? <IoEye onclick= {() => setSeePassword(!seePassword)}/> : <IoEyeOff onclick={() => setSeePassword (!seePassword)}/> }
        </div>
        <button type="submit"> SIGN IN </button>
    </form>
    <p>You don't have an account? <span><Link to="/auth/signUp">SIGN IN</Link></span></p>
</div>
  )
}

export default Login