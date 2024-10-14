

  
const CartItem = ({ items}:any) => {  
    return (  
      <div className="flex justify-between items-center border-b py-4">  
        <div>  
          <h2 className="text-lg font-medium">{items.name}</h2>  
          <p className="text-gray-500">Rs{items.price.toFixed(2)} x {items.quantity}</p>  
        </div>  
        <div className="flex items-center">  
          <input   
            type="number"   
            defaultValue={items.quantity}   
            className="w-16 border rounded mx-2"   
          />  
          <button className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>  
        </div>  
      </div>  
    );  
  }  
  
  export default CartItem;