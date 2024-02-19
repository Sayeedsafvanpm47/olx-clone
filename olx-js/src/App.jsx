
import {Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext,useEffect,Suspense,lazy } from "react"
import {AuthContext,FirebaseContext} from "./store/Context"

import Post from "./store/PostContext"
const Home = lazy(() => import("./Pages/Home"));
const SignupPage = lazy(() => import("./Pages/Signup"));
const LoginPage = lazy(() => import("./Pages/Login"));
const CreatePage = lazy(() => import("./Pages/Create"));
const ViewPost = lazy(() => import("./Pages/ViewPost"));
const App = () => {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
   firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
   })
  },[])
  return (
    <div>
        <Post>
        
        <Suspense fallback={<div style={{alignContent:'center'}} className='spinner-border text-primary'>Loading...</div>}>
        <div>
    
      <ToastContainer />


    </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/view" element={<ViewPost />} />
          </Routes>
        </Suspense>
      </Post>
   
    </div>
  )
}

export default App