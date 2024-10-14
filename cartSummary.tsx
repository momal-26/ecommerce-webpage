
// components/CartSummary.tsx  
interface CartItem {  
    id: number;  
    name: string;  
    price: number;  
    quantity: number;  
  }  
  
  interface CartSummaryProps {  
    items: CartItem[]; // 'items' prop is required  
  }  
  
  const CartSummary: React.FC<CartSummaryProps> = ({ items }) => {  
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);  
  
    return (  
      <div className="mt-6 bg-gray-100 p-4 rounded">  
        <h2 className="text-xl font-bold">Cart Summary</h2>  
        <div className="flex justify-between mt-2">  
          <span>Total:</span>  
          <span className="font-bold">${totalPrice.toFixed(2)}</span>  
        </div>  
        <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded">  
          Checkout  
        </button>  
      </div>  
    );  
  };  
  
  export default CartSummary;
















