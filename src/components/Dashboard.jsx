import React, { useEffect, useState } from 'react';
import { authentication, error, firstname } from './reconcile';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import Results from './Results';

const Dashboard = () => {
    const firstName= useRecoilValue(firstname)
    const Authentication= useRecoilValue(authentication)
    const[balance,setBalance]= useState(null)
    const[param,setParam]= useState()
    const[showResult,setShowResult] = useState(false )
    const Error = useRecoilValue(error)
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const getApi = "http://localhost:3000/api/v1/account/balance";
              const response = await axios.get(getApi, {
                headers: {
                  authorization: `Bearer ${Authentication}`
                },
              });
              console.log("here")
              console.log(response.data)
              setBalance(response.data.balance);
            } catch (error) {
              console.error("Error fetching balance:", error);
            }
          };
      
          fetchData();
        }, [Authentication]);
       if(Error===true){
        return (
        
                 <div className="flex justify-center items-center h-screen bg-gray-100">
                        <div className="text-center">
                           <h1 className="text-4xl font-bold">Unauthorized User</h1>
                             <p>Please login</p>
                                         </div>
                                    </div>
        
        )
       }
    
    
    
  return(
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold">PAYMENT_APPLICATION</h1>
        <div>
          <span>{firstName}</span>
        </div>
      </header>
      <div className="p-4">
        <div className="bg-white shadow-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">{firstName} Information</h2>
          <p>Your balance {balance}</p>
        </div>
        <div >
          <input type="text" className="p-2 rounded-l-md border-grey-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 flex-1" onChange={(e)=>{
            setParam(e.target.value)
          }}/>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-r-md" onClick={()=>{
                if(param){
                setShowResult(true)
                }
          }}>Search</button>
          {
            showResult && <Results param={param} />
          }
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


  