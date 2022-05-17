import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Create from "./Pages/Create";
import View from "./Pages/View";
import React,{useEffect,useContext} from 'react'
import { AuthContext, FirebaseContext } from "./store/Context";

function App() {
  const {firebase } = useContext(FirebaseContext)
  const {user, setUser} = useContext(AuthContext)
  useEffect(() => {
    console.log(user)
    console.log("completed")
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  });
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
