import { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import axios from "axios";
// import { InputBox, InputSearch } from "../components/InputBox";
import { Users } from "../components/users";

export function Dashboard(){
    const [balance , setBalance] = useState(0)
    const [firstName, setFirstName] = useState("")
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    useEffect( ()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiUrl}/api/v1/account/balance`,
            headers: { 
              'authorization': `Bearer ${localStorage.getItem('token')}`, 
              'Content-Type': 'application/json'
            }
          };
          
          axios.request(config)
          .then((response)=>{
          
            setFirstName(response.data.firstName)
            setBalance(response.data.Balance)
          })

    },[])
    
    return <div>
        <NavBar name ={firstName}/>
        <div className="flex">
            <h2>Your Balance </h2>
           <div className="font-bold mx-2"> <h1 >{ Math.floor(balance*100)/100}</h1></div>
        </div>
        
        <div>
          <Users/>
        </div>
    </div>
}