export function InputBox({label , placeHolder,type, onChange}){
    return <div className="">
        <div className="text-xs text-gray-600  font-light text-left py-2">{label}</div>
        <input onChange={onChange} type={type} placeholder={placeHolder} className=" w-auto  focus:bg-slate-300 p-1 focus:outline-none border rounded-md border-slate-300  " />
    </div>

}
export function InputSearch({label , placeHolder,type, onChange}){
    return <div className=" w-auto  sm:w-96">
        <div className="text-xs text-gray-600  font-light text-left py-2">{label}</div>
        <input autoFocus onChange={onChange} type={type} placeholder={placeHolder} className=" w-full  p-1 focus:outline-none border rounded-md border-slate-300  " />
    </div>

}