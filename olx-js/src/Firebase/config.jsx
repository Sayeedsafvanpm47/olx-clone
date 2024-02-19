import firebase from "firebase/compat/app";

import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'



export const firebaseConfig = {

  apiKey: "AIzaSyDzk8qM-uhjA3JIFBUMaiAshrilX75KtZc",

  authDomain: "olx-backup.firebaseapp.com",

  projectId: "olx-backup",

  storageBucket: "olx-backup.appspot.com",

  messagingSenderId: "899214722267",

  appId: "1:899214722267:web:5126a85d45d6bd69dbf8fe",

  measurementId: "G-8SZ1PH02E8"

};


export default firebase.initializeApp(firebaseConfig)
        
        