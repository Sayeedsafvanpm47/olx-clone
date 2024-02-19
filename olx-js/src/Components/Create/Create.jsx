import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const Create = () => {
  const{firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState('')
  const [description,setDescription] = useState('')
  const [place,setPlace] = useState('')
  const [boost,setBoost] = useState('')
  const [loading,setLoading] = useState(false)

  const date = new Date()
  const navigate = useNavigate()
  const handleUploadAndSubmit = ()=>{
    setLoading(true)
    if (!name || !category || !price || !image || !place || !description) {
      setLoading(false);
      toast('Please fill in all the required fields');
      return;
    }
   firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
      console.log(url)
      firebase.firestore().collection('products').add({
        name,category,price,url,place,description,boost,
        userId:user.uid,createdAt:date.toDateString()
      }).then(()=>{navigate('/');
    setLoading(false)
    }).catch(()=>{
      setLoading(false);
      toast('some unexpected error occured')

    })
    })
   })
  }
  return (
    <Fragment>
      <Header />
      <div>
      <img className='bgimage' src="../../../Images/createbg.avif" alt="" />
        <div className="centerDiv">
      
      
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              defaultValue=""
              required
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              defaultValue=""
              required
            />
             <br />
            <label htmlFor="fname">Description</label>
            <br />
            <textarea
              className="input"
              type="text"
              id="fname"
              name="description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              defaultValue=""
              required
            />
             <br />
            <label htmlFor="fname">Place</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="place"
              value={place}
              onChange={(e)=>setPlace(e.target.value)}
              defaultValue=""
              required
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>setPrice(e.target.value)} required />
            <br />
      
          <br />
          <img alt="Posts" width="300px" height="200px" src={image?URL.createObjectURL(image):'../../../Images/file_upload.gif'} ></img>
      
            <br />
            <br />
            <input required type="file"  onChange={(e)=>setImage(e.target.files[0])}/>
            <br />
            <label htmlFor="select"></label>
            <select className='form-select' value={boost} name='select' onChange={(e)=>setBoost(e.target.value)} id="place">
              
              <option value="">Choose</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <br />
            <button onClick={handleUploadAndSubmit} className="uploadBtn">{loading ? 'Uploading now...' : 'Upload and Submit'}</button>
        
        </div>
        </div>
      
    </Fragment>
  );
};

export default Create;