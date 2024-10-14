import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";




const HeaderTop =() => {
return (
<div className="border-b border-sky-50 hidden sm:block">
    <div className="container py-4">
         <div className="flex justify between items-center">
              <div className="hidden lg:flex gap-1"></div>
              <p className="p-4 text-[20px] border-gray-300"> follow us on </p>
              <div className="header_top__icon_wrapper">
                <FaFacebookSquare/>
              </div>
              <div className="header_top__icon_wrapper">
                <FaInstagramSquare />
              </div>
              <div className="header_top__icon_wrapper">
                <FaTwitter />
              </div>
              <div className="header_top__icon_wrapper">
              <FaLinkedin />
              </div>
              </div>
 <div className="text-emerald-800 text-center text-[18px]" >FREE SHIPPING THIS WEEK OVER ORDER RS 2000</div>
  </div>
 
 </div>
)
 };

export default HeaderTop;