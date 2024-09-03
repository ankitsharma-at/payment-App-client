import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import axios from "axios";

export function Send(){
    const [searchParams] = useSearchParams()
    const userId = searchParams.get("userId")
    const name = searchParams.get("name")
    const [ammount , setAmmount] = useState(0)
    const [transferStatus , setTransferStatus] = useState("")
    const navigate = useNavigate()
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;



    return <div className="flex  justify-center items-center h-screen bg-slate-100">
        <div className="shadow-md rounded-md p-4 bg-white">
            <div className="font-bold flex items-center justify-center">
                <h2>Send money</h2>
            </div>
            <div >
                <div className="flex mt-8">
                <div className=" bg-blue-100 text-blue-600 rounded-full  mx-2 h-8 w-8 flex justify-center items-centre">
                    <span className="pt-1">{name[0].toUpperCase()}</span>
                </div>
                <div className="flex items-center"> 
                    <h2 className="text-center  font-medium">{name}</h2>
                </div>
                </div>
                <div className="py-2">
                <InputBox onChange={e => {
                    setAmmount(e.target.value)
                }} label={"enter Ammount (Rs)"}/>
                </div>
                
                <div>
                    <Button onClick={()=>{
                        try{
                        axios.post(`${apiUrl}/api/v1/account/transfer` ,{
                            to:userId,
                            ammount
                        },{
                            headers:{
                                Authorization: "Bearer " + localStorage.getItem('token')
                            }
                        })
                        .then((response)=>{
                            
                            setTransferStatus(response.data.message)
                            // console.log(transferStatus)
                             alert(response.data.message)
                             navigate("/dashboard")
                           
                            
                        })
                    }catch{
                        return <></>
                    }
                        
                    }} label={'Send Money'}/>
                </div>
            </div>
        </div>
    </div>
    
}