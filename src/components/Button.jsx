import { Link } from "react-router-dom"

export function Button({label , onClick , color}){
    return <div>
        <button onClick={onClick} className="bg-gray-700 rounded-md px-2 p-1 text-white font-medium w-full">
            {label}
        </button>

    </div>
}
export function ButtonWarning({label,buttonText, to}){
    return <div className="text-xs flex">
        <div className="mx-1">{label}</div>
        <Link className="text-blue-500 underline" to={to} >{buttonText}</Link> 
    </div>
}
export function Button2({label , onClick , color}){
    return <div>
        <button onClick={onClick} className="bg-white  hover:bg-black hover:text-white rounded-md px-2 p-1 text-black font-medium w-full">
            {label}
        </button>

    </div>
}