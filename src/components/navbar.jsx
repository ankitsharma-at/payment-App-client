import { Navigate, useNavigate } from "react-router-dom";
import { Button2 } from "./Button";

export function NavBar({name}){
    
    const navigate = useNavigate()
    return <div>
        <div className="flex justify-between p-2">
            <h1 className="font-medium"> Payment app (clone)</h1>
            <h2 className="font-medium">hello {name} </h2>
            <div className="flex font-medium  items-center">
                <Button2 color={"bg-white border-black text-black"} onClick={() => {
                    localStorage.removeItem("token")
                    navigate("/login")
                    
                }} label={"Log out"} /> 
                <div className=" bg-blue-100 text-blue-600 rounded-full  mx-2 h-8 w-8 flex justify-center items-centre">
                    <span className="pt-1">{ name[0] }</span>
                </div>
            </div>
        </div>
        <hr/>
    </div>
}