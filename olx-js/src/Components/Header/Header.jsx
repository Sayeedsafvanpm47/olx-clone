
import './Header.css';
import OlxLogo from '../assets/OlxLogo';
import Search from '../assets/Search';
import Arrow from '../assets/Arrow';
import SellButton from '../assets/SellButton';
import SellButtonPlus from '../assets/SellButtonPlus';
import Dropdown from 'react-dropdown'
import { useContext } from 'react';
import { AuthContext,FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Header(props) {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    firebase.auth().signOut().then(()=>{
 navigate('/')
    })
  }
  
  return (
    <>
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search color='red'></Search>
          
          <input type="" value='India'/>
     
          <button className='btn btn-none p-0'><Arrow></Arrow></button>
       
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
          <span>{user?`Hello ${user.displayName}`:'Login'}</span>
          <hr />
        </div>
        <span onClick={handleLogout}>{user && 'Logout'}</span>

        <div className="sellMenu">
      <SellButton></SellButton>
          <div className="sellMenuContent">
          <Link to={user?'/create':'/login'}>   <SellButtonPlus></SellButtonPlus></Link>
         
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  
    </>

  );
}

export default Header;