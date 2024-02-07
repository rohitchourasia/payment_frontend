import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



import Signup from './components/Signup';
import Signin from './components/signin';
import Dashboard from './components/dashboard';
import React from 'react'
import Landing from './components/Landing';
import SendCard from './components/SendCard';

export default function Mycomponent() {
  return (
    <>
    <Router>
   <Routes>
   <Route path="/" element={<Landing/>} />
  <Route path="/signup" element={<Signup />} />
  <Route path = "/signin" element = {<Signin/>}/>
  <Route path= "/dashboard" element= {<Dashboard/>}/>
  <Route path= "/send/:userID" element={<SendCard/>}/>
  
   </Routes>
   </Router>
    
    </>
  )
}


