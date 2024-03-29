

import Logo from '../../olx-logo.png';
import './Login.css';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { CiHome } from "react-icons/ci";


function Login() {
const {firebase} = useContext(FirebaseContext)
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [loading, setLoading] = useState(false);
const navigate = useNavigate()
const handleLogin = (e)=>{
  e.preventDefault()
  setLoading(true);
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    setLoading(false);
navigate('/')
  }).catch((err)=>{ toast('invalid credentials, please try again');
 setLoading(false)
})
  
}
const signUpBtn = ()=>{
  navigate('/signup')
}
const {user} = useContext(AuthContext)
useEffect(()=>{
if(user){
  navigate('/')
}
},[])

  return (
    <div className='mainDiv'>
      <img src="../../../Images/loginbg.webp" className='imagecontainer' alt="" />
      <div className="loginParentDiv">
        <div className='logocontainer'><img width="200px" height="200px" src={Logo}></img></div> 
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
            required
            
          />
          <br />
          <br />
          <button type="submit" disabled={loading}> 
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <a onClick={signUpBtn}>Signup</a>
     <span><a href="/" className='home'>Go home  <CiHome/> </a></span>  
       
      </div>
    </div>
  );
}

export default Login;