

import { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';

function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
 

  useEffect(()=>{
    const {userId} = postDetails
   

    firebase.firestore().collection('users').where('id','==',userId).get().then((result)=>{
      result.forEach(doc => {
         setUserDetails(doc.data())
      })
    }).catch(() => {
      navigate('/');
    });
  
   
   
  },[])

  return (
   <>
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails"> 
          <p>Selling price :  &#x20B9; {postDetails.price} </p>
          <span>Product : {postDetails.name}</span> <br />
          <span>Category : {postDetails.category}</span> <br />
          <span>Place : {postDetails.place}</span><br />
          <span>Posted on : {postDetails.createdAt}</span>
        </div>
        {userDetails &&  
          <div className="contactDetails">
            <p>Seller Details</p>
            <p><b>Name</b> : {userDetails.username}</p>
            <p><b>Contact Number</b> :{userDetails.phone}</p>
            <button className='chatbutton'>Chat With Seller</button>
          </div>
        }
           <p className='adId'> Ad Id - {postDetails.id}</p>
      </div>
  
    </div>
  
    <div className='details'>
   
     <p className='detailsP'> Details</p>
      <span className='detailSpan'> Name : {postDetails.name}
      <br />
     Category : {postDetails.category}
      <br />
     Place : {postDetails.place} <br />
      Contact on : {userDetails  && userDetails.phone}
      </span>

    </div>
   
    <div className='details'>
   
     <p className='detailsP'> Description</p>
      <span className='detailSpan'> Name : {postDetails.description}
      <br />
     Posted On : {postDetails.createdAt}
      <br />
   
      </span>

    </div>
    <Footer/>
    </>
    )

}
export default View;