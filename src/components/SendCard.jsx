import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { authentication } from './reconcile';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

const TransactionForm = () => {
    const {userID} = useParams();
    const[amount,setAmount] = useState(null);
    const Authentication = useRecoilValue(authentication);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 rounded-lg bg-white shadow-lg">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount</label>
          <input
            type="number"
            id="amount"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e)=>{
                setAmount(e.target.value)
            }}
          />
        </div>

        <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"onClick={async()=>{
            const api = "http://localhost:3000/api/v1/account/transfer"
            const data ={
                to:userID,
                amount: amount,
                

            }
            const headers = {
                authorization:`Bearer ${Authentication}`,
                'Content-Type': 'application/json',
                // Add other headers as needed
              };
              try {
            
            const response = await axios.post(api,data,{
               headers
            })
        

            
            alert(response.data.message)
        }
        catch {
            alert("Invalid transaction ")
        }
        }}>Submit</button>
      </div>
    </div>
  );
}

export default TransactionForm;