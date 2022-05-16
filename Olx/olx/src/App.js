import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Create from "./Pages/Create";
import View from "./Pages/View";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
