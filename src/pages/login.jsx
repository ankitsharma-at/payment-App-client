import axios from "axios";
import { Button, ButtonWarning } from "../components/Button";
import { Heading } from "../components/Hadding";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const navigate = useNavigate()
    return <div className="bg-slate-800 h-screen flex justify-center items-center">
        <div className="bg-white px-8 py-4 rounded-md">
            <Heading label={"Login"}/>
            <InputBox onChange={ e =>{
                setEmail(e.target.value)
            }} label={'Email'} placeHolder={'example@gmail.com'} />
           
            
            <InputBox  onChange={ e =>{
                setPassword(e.target.value)}} type={"password"} label={'Password'} placeHolder={'password'} />
                <br></br>
            <Button onClick={async ()=>{
               const response =await axios.post(apiUrl+'api/v1/user/signin',{
                username:email,
                password
               })
                localStorage.setItem("token",response.data.token)
                navigate("/dashboard")
            }} label={"Login"}/>
            <ButtonWarning label={"Doesn't have an account"} to={"/"} buttonText={"Signin"}/>
        </div>
    </div>
}