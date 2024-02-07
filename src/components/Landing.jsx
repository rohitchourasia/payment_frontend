import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <>
    <div className="  min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
      <div className="flex items-center justify-center space-x-4">
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/signup">Sign Up</Link>
        <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" to="/signin">Sign In</Link>
      </div>
    </div>
    
    </>
  );
}


export default Landing;