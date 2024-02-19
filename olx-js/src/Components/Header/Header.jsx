
import './Header.css';
import OlxLogo from '../assets/OlxLogo';
import Search from '../assets/Search';
import Arrow from '../assets/Arrow';
import SellButton from '../assets/SellButton';

import SellButtonPlus from '../assets/SellButtonPlus';
import { useContext, useState } from 'react';
import { AuthContext,FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


function Header(props) {
  
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
  const [arrow,setArrow] = useState(false)
  const changeArrow = ()=>{
    setArrow(!arrow)
  }
  const handleLogout = ()=>{
    firebase.auth().signOut().then(()=>{
 navigate('/')
    })
  }
  const routeToLogin = () => {
    navigate('/login'); 
  };
  const goToHome = ()=>{
    navigate('/')
  }

  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={goToHome}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search color='red'></Search>
          
          <input type="" value='India'/>
     
        {!arrow && <button onClick={changeArrow} className='btn btn-none p-0 fs-4'><IoIosArrowDown /></button> }  
        {arrow && <button onClick={changeArrow} className='btn btn-none p-0 fs-4'><IoIosArrowUp />
</button>}
         
        </div>
      
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
           
        </div>
        <div className="loginPage">
          <span className='loginText' onClick={user? '' : routeToLogin}>{user?`Hello ${user.displayName}`:'Login'}</span>
          <hr />
          <span className='logoutText' onClick={handleLogout}>{user && 'Click here to Logout'}</span>
        </div>
      

        <div className="sellMenu">
      <SellButton></SellButton>
          <div className="sellMenuContent">
          <Link to={user?'/create':'/login'}>   <SellButtonPlus></SellButtonPlus></Link>
         
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;