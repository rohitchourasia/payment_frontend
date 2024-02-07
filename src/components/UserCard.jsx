import React from 'react';
import { Link } from 'react-router-dom';
import SendCard from './SendCard';

const UserCard = ({ firstname,userName,lastname,userId}) => {
    console.log(firstname)
    console.log("here in usercard")
  return (
    <div className="max-w-xs w-full p-4 rounded-lg bg-white shadow">
    <div className="flex items-center justify-between mb-2">
    <div>
          <div className='flex space-x-2 ... '>
          <h2 className="text-lg font-bold">{firstname}</h2>
          <h2 className="text-lg font-bold">{lastname}</h2>
          </div>
          
          <p className="text-gray-600 text-sm">Username: {userName}</p>
        </div>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" to={`/send/${userId}`}>Send</Link>
    </div>
  </div>
  );
}

export default UserCard;