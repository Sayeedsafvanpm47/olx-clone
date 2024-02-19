
import { useContext, useState } from 'react';
import { CiHome } from "react-icons/ci";
import Logo from '../../olx-logo.png';
import {toast} from 'react-toastify'
import './SignUp.css'
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [phone,setPhone] = useState('')
const [password,setPassword] = useState('')
const {firebase} = useContext(FirebaseContext)
const [loading,setLoading] = useState(false)
const navigate = useNavigate()
const loginButton = ()=>{
  navigate('/login')
}
const handleSubmit = (e)=>{
          e.preventDefault()
          setLoading(true)
          console.log(username)
          console.log(firebase)
          firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayName:username}).then(()=>firebase.firestore().collection('users').add({
              id:result.user.uid,
              username:username,
              phone:phone,
              email : email
             
            }).then(()=>{navigate('/login'); setLoading(false)}).catch((err)=>{toast('Please fill in the details properly'); setLoading(false)})
            )
         
          }).catch((err)=>{toast('Email already exists!'); setLoading(false)})
        

}

  return (
    <>
    <div>
    <img src="../../../Images/signupbg.png" className='backgroundSignup' alt="" />
      <div className="signupParentDiv">
        <img className='logobg' width="200px" height="200px" src={Logo}></img>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
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
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
            required
          />
          <br />
          <br />
          <button>{loading?'Signing in...' : 'Sign up'}</button>
        </form>
        <a onClick={loginButton}>Login</a>
        <span><a href="/" className='home'>Go home  <CiHome/> </a></span>  

      
      </div>
    </div>
    </>
  );
}