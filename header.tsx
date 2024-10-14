import React from "react";
import { BsSearch } from "react-icons/bs";

 const Header =()=>{
return( 
<div className="border-b border-gray-300 py-6">
      <div className="container sm:flex justify-between  items-center">
         <div className=" text-4xl text-center pb-4 sm:pb-0 font-extrabold text-cyan-500">CozyCrafts
            <h1 className="text-pink-400 text-center text-[30px] font-light font-mono" >Handcrafted With LOVE</h1>
         </div>
    <div    className="w-full sm:w[300px] md:w-[70%] relative">
       <input className="border-rose-800 border p-2 px-4 rounded-lg w-full"
        type="text"
         placeholder="Enter my products name here..."
        ></input>
        <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-stone-500 size{20}"/>
      </div>

    </div>
      </div>

)
 }

export default Header;