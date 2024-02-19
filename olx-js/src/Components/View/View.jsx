

import { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useNavigate} from 'react-router-dom';

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
   
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails &&  
          <div className="contactDetails">
            <p>Seller Details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        }
      </div>
    </div>
    )

}
export default View;