import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import {  Button } from "./Button"
import { useNavigate } from "react-router-dom"
import { InputSearch } from "./InputBox"

export function Users(){
    const [users , setUsers] = useState([])
    const [filter , setFilter] = useState("")
    const [loading , setLoading] = useState(false)
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    useEffect(()=>{
        setLoading(true);
        axios.get(`${apiUrl}/api/v1/user/bulk?filter=${filter}`,{ headers: { 
            'authorization': `Bearer ${localStorage.getItem('token')}`, 
            'Content-Type': 'application/json'
          }})
        .then( (response) =>{
            setUsers(response.data.user)
            setLoading(false);
        })
    },[filter])
    
     return <div>
        
        <div>
        <div>
        <div className="flex justify-center">
        <InputSearch onChange={e => {
            setFilter(e.target.value)
        }} type={"search"} placeHolder={"search"}/>
        </div>
        </div>
        { loading ? <div className="flex justify-center items-center font-medium text-lg">loading...</div> :  
        <div>
        {users.map( user =>{ return <div> <User user={user}/></div>})}
        </div>}
        </div> 
    </div>
}
function User({user}){
    const navigate = useNavigate();
    return <div className="flex justify-between m-2">
        <div className="flex">
            <div className=" bg-blue-100 text-blue-600 rounded-full  mx-2 h-8 w-8 flex justify-center items-centre">
            <span className="pt-1">{ user.firstName[0].toUpperCase() }</span>
            </div>
            <div>
                <h2 className="font-medium"> {user.firstName} </h2>
                </div>
        </div>
        <div className="mx-4">
            <Button onClick={() =>{
                navigate(`/send?userId=${user._id}&name=${user.firstName}`)
            }} label={"send money"}/>
        </div>
    </div>
}