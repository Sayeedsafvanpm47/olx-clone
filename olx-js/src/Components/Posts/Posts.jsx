import { useContext, useEffect, useState } from 'react';
import Heart from '../assets/Heart';
import './Posts.css'
import { AuthContext, FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

function Posts() {
const {setPostdetails} = useContext(PostContext)
const {firebase} = useContext(FirebaseContext)
const {user} = useContext(AuthContext)
const [products,setProducts] = useState([])
const navigate = useNavigate()
useEffect(()=>{
  firebase.firestore().collection('products').get().then((snapshot)=>{
 const allPost = snapshot.docs.map((products)=>{
  return {...products.data()
     ,id:products.id
  }
 })

 setProducts(allPost)
 console.log(allPost)
  })
 
},[])
  return (
    <>
    <div className="row">
      <div className={user&&'col-3'}>
     {user && <SideBar></SideBar>} 
      </div>
      <div className={user?'col-9' : 'col-12'}>
      <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
         
        </div>
        <div className="cards d-flex">
          {
 products.length && products.map((products)=>{
 return <div key={products.id}
  className="card" onClick={()=>{
    setPostdetails(products);
    
   navigate(`/view`)
    
  }}
  >
  <div className="favorite">
    <Heart></Heart>
  </div>
  <div className="image">
    <img src={products.url} alt="" />
  </div>
  
  <div className="content">
    <p className="rate">&#x20B9; {products.price}</p>
    <p className="name">{products.name}</p>
    <p className="kilometer">{products.description?(products.description).slice(0,25) + '...':''}</p>
    <span className="kilometer">Category : {products.category}</span>
   
   
  </div>

  <div className="date">
  <span className="kilometer">{products.place?products.place:''}</span>
    <span>{products.createdAt}</span>
  </div>
  </div>
  
 })
         

          }
       
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map(product => {
            if(product.boost === 'yes')
            {

              return <div className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
    <p className="rate">&#x20B9; {product.price}</p>
    <p className="name">{product.name}</p>
    <p className="kilometer">{product.description?(product.description).slice(0,25) + '...':''}</p>
    <span className="kilometer">Category : {product.category}</span>
   
   
  </div>
  <div className="date">
  <span className="kilometer">{product.place?product.place:''}</span>
    <span>{product.createdAt}</span>
  </div>
            </div>

            }
          })}
      
        </div>
      </div>
    </div>
      </div>
    </div>
   

    </>
  );
}

export default Posts;