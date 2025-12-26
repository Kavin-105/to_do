import { useState } from "react";

function Counter() {
    const [ cnt, setCnt ] = useState(20);
    function handleClicki(){
            setCnt(cnt + 1);
    }
    function handleClickd(){
        setCnt(cnt-1);
    }
    function handleClickr()
    {
        setCnt(0);
    }

    return(
        <>
        <section className="w-screen min-h-screen flex flex-col justify-center items-center">
        <div className="bg-blue-200 w-fit p-5 text-center rounded-2xl duration-700 ">
        <button className=" bg-yellow-100 m-1 rounded-sm shadow-md active:shadow-blue-700 px-1  hover:bg-gray-500 hover:text-white hover:rotate-y-45 transition-all duration-800" onClick={() => setCnt(cnt + 1)}>inc</button>
        <button className=" bg-yellow-100 m-1 rounded-sm active:shadow-md  active:shadow-red-700 px-1 hover:bg-gray-500 hover:text-white hover:rotate-x-45 transition-all duration-800" onClick={handleClickd}>dec</button>
        <button className=" bg-yellow-100 m-1 rounded-sm active:shadow px-1 hover:bg-gray-500 hover:text-white" onClick={handleClickr}>repeat</button>
        <h1 className="text-pink-500 hover:text-purple-600 font-semibold">counter {cnt}</h1>
        </div>
        </section>

      
        </>

    )
}
export default Counter;