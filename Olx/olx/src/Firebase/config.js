import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import  'firebase/compat/firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyC4BAiKoQyy9EU2rTVc5B7mQA9OnvchGfo",
    authDomain: "olx-clone-1383c.firebaseapp.com",
    projectId: "olx-clone-1383c",
    storageBucket: "olx-clone-1383c.appspot.com",
    messagingSenderId: "288884373697",
    appId: "1:288884373697:web:eb87084549dab3d5fbbc40",
    measurementId: "G-4RL1S7T7JC"
  }



export default firebase.initializeApp(firebaseConfig)