import {  useState } from "react"
import axios from 'axios'
import { InputBox } from "../components/InputBox"
import { Heading } from "../components/Hadding"
import { Button, ButtonWarning } from "../components/Button"
import { useNavigate } from "react-router-dom"

export function Signup(){
    const [email,setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [isLoading, setIsloading] = useState(false)
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    console.log(apiUrl)
    
    return <div className="bg-slate-800 h-screen flex justify-center items-center">
        <div className=" bg-white px-8 py-4 rounded-md  justify-center">
            <Heading label={"Signup"}/>
            <InputBox onChange={e =>{
                setEmail(e.target.value)
                }} label={'Email'} placeHolder={'example@gmail.com'} type={"text"}/>
            <InputBox onChange={e =>{
                setFirstName(e.target.value)
                }} label={'First Name'} placeHolder={'John'} type={"text"}/>
       
            <InputBox onChange={e =>{
                setLastName(e.target.value)
                }} label={'Last Name'} placeHolder={'smith'} type={"text"} />
            <InputBox onChange={e =>{
                setPassword(e.target.value)
                }} label={'Password'} placeHolder={'password'} type={"password"}/>
                <br/>
            <Button onClick={async ()=>{
                try{
                    setIsloading(true)
               const response =await axios.post(`${apiUrl}/api/v1/user/signup`,{
                username:email,
                firstName,
                lastName,
                password
               })
                setIsloading(false)
                 localStorage.setItem("token",response.data.token)
                 navigate("/dashboard")} catch(e){
                    setIsloading(false)
                    alert("couldn't sign up")
                 }
            }} label={ isLoading ?  "Signing in.." : "signin"}/>
            <ButtonWarning label={"Already have an account"} to={"/login"} buttonText={"Login"}/>
        </div>
    </div>
}