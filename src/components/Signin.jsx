import React, { useEffect, useState } from 'react';
import { firstname,authentication, error } from './reconcile';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Signin = () => {
  const[userName,setUsername]= useState("") ; 
  const[password,setPassword] = useState("") ; 
  const [firstName, setFirstname] = useRecoilState(firstname);
  const [Authentication,setAuthentication]= useRecoilState(authentication)
  const[Error,setError] = useRecoilState(error)
  

  
  
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700" >Username</label>
            <input type="text" id="username" name="username" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" onChange={(e)=>{
              setUsername(e.target.value)
            }} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" onChange={(e)=>{
              setPassword(e.target.value)
            }} />
          </div>
    
          <div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={async()=>{
              try {
    
                const seturl = "http://localhost:3000/api/v1/user/signin" 
                          
                const data = {
                  username: userName,
                  password: password
                }
                const response = await axios.post(seturl,data,{
                  headers: {
                    'Content-Type': 'application/json',
                  }
                });
               
                console.log(response.data)
                setFirstname(response.data.firstname); 
                setAuthentication(response.data.token);
              }
              catch {
                setError(true)
              }
            
              
            }} to="/dashboard">Submit</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
