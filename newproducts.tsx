
"use client";


import React, { useState } from "react"; 
 

// Define the type for the product  
interface Product {  
  id: number;  
  title: string;  
  description: string;  
  price: number;  
  imageUrl: string;  
}  

const products: Product[] = [  
  {  
    id: 1,  
    title: "Baby Dress Set",  
    description: "Pink baby checker pattern sweater.",  
    price: 8000,  
    imageUrl: "/product1.jfif",  
  },  
  {  
    id: 2,  
    title: "Mobile Cover",  
    description: "Crocheted mobile cover.",  
    price: 1000,  
    imageUrl: "/product6.jfif",  
  },  
  {  
    id: 3,  
    title: "Shoulder Bag",  
    description: "A black shoulder bag with a detachable metallic gold chain.",  
    price: 4000,  
    imageUrl: "/product4.jfif",  
  },  
  {  
    id: 4,  
    title: "Shoulder Shawls for Women",  
    description: "Beautiful grey square patterned winter shawl.",  
    price: 4000,  
    imageUrl: "/shawl2.jfif",  
  },  
  {  
    id: 5,  
    title: "Classic Tote Bag",  
    description: "Beige spacious tote bag to keep all your essentials.",  
    price: 5000,  
    imageUrl: "/totebag.jfif",  
  },  
];  

const NewProducts: React.FC = () => {  
  const [cart, setCart] = useState<Product[]>([]); // Specify the state type  

  const addToCart = (product: Product) => {  
    setCart((prevCart) => [...prevCart, product]);  
    alert(`${product.title} has been added to your cart!`);  
  };  

  return (  
    <div>  
      <div className="container mx-auto p-4">  
        <h1 className="text-3xl font-bold mb-6 text-rose-600">Our Products</h1>  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">  
          {products.map((product) => (  
            <div key={product.id} className="border p-4 rounded-lg shadow-md">  
              <img  
                src={product.imageUrl}  
                alt={product.title}  
                className="w-full h-48 object-cover mb-4 rounded"  
              />  
              <h2 className="text-xl font-semibold">{product.title}</h2>  
              <p className="text-gray-700 text-sm mb-2">{product.description}</p>  
              <p className="text-gray-900 font-bold">Rs {product.price.toFixed(2)}</p>  
              <button  
                onClick={() => addToCart(product)}  
                className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-blue-600"  
              >  
                Add to Cart  
              </button>  
            </div>  
          ))}  
        </div>  
        <div className="mt-6">  
          <h2 className="text-xl font-semibold">Items in Cart: {cart.length}</h2>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default NewProducts;