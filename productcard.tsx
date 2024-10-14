import React from "react";
import Image from "next/image";

interface propsType{
img:string,
title:string,
desc:string,
price:string,
}
const  ProductCard:React.FC<propsType> =({ 
    img,
    title,
    desc,
    price,
})  => {
    return(
<div className="px-4 border border-gray-200 rounded-xl max-w-[400]">
    <div>
    <Image className="w-full h-auto "src={img} width={200} height={300} alt="title"/>
   </div>
</div>
 )
};
export default ProductCard;
