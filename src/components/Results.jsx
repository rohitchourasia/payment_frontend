import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function Results({ param }) {
    console.log("i m in Results")
    console.log(param)
  const [obj, setObj] = useState([]);

  useEffect(() => {
    const fetch = async () => {
        console.log("going to fetch ")
      const api = `http://localhost:3000/api/v1/user/bulk?filter=${param}`;
      

      try {
        console.log("loggin the response")
        const response = await axios.get(api);
        console.log(response.data)
        setObj(response.data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetch(); 
  }, [param]);

  return (
    <div>
      {obj.map((ob) => (
        <div key={ob._id}>
            {
                console.log(ob.firstName)
            }
          <UserCard firstname={ob.firstName} userName={ob.username} lastname={ob.lastName} userId={ob._id}/>
        </div>
      ))}
    </div>
  );
}

