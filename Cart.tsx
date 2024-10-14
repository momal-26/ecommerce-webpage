// pages/cart.tsx (assuming it's a TypeScript file)  
import CartItem from "@/components/cartitem";  
import CartSummary from "@/components/cartsummary"  

const Cart: React.FC = () => {  
  const cartItems = [  
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },  
    { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },  
  ];  

  return (  
    <div className="container mx-auto px-4 py-8">  
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>  
      <div className="flex flex-col">  
        {cartItems.map(item => (  
          <CartItem key={item.id} item={item} />  
        ))}  
      </div>  
      <CartSummary items={cartItems} />  
    </div>  
  );  
};  

export default Cart;

