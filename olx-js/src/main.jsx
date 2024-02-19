import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseContext } from './store/Context.jsx';
import Context from './store/Context.jsx';
import firebase from './Firebase/config.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <FirebaseContext.Provider value={{firebase}}>
      <Context>
      <BrowserRouter>
    <App />
    </BrowserRouter>
      </Context>
    
    </FirebaseContext.Provider>
 

)
