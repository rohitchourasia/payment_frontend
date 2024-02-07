import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const[firstName,setFirstname]= useState("") ; 
  const [lastName,setLastname] = useState("") ; 
  const[userName,setUsername]= useState("") ; 
  const [password,setPassword] = useState("") ; 
  
  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" onChange={(e)=>setFirstname(e.target.value)} />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" onChange={(e)=>setLastname(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="text" id="password" name="password" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm" onChange={(e)=>{
             setPassword(e.target.value) 
            }}/>
          </div>
          <div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={async()=>{
              const apiurl="http://localhost:3000/api/v1/user/signup" ;
              
              const data = {
                firstname:firstName,
                lastname:lastName,
                username:userName,
                password:password
              }
              const response = await axios.post(apiurl, data, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              console.log(response.data)
              alert(response.data.mssg)
              e.preventDefault()
              
              
            }} to="/signin">Submit</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
