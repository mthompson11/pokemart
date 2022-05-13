import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { getUser } from '../../utilities/users-service'
import ResponsiveAppBar from '../../components/AppBar/AppBar'
import ShopPage from '../ShopPage/ShopPage'
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
import * as ordersAPI from '../../utilities/orders-api'
import OrderDetailPage from '../OrderDetailPage/OrderDetailPage'
import PaymentSuccessPage from '../PaymentSuccessPage/PaymentSuccessPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);
  
  useEffect(function(){
    async function getCart(){
      const cart = await ordersAPI.getCart();
      setCart(cart);
    };
    if(user){
      getCart();
    }
  }, [user]);

  async function handleAddToOrder(itemId) {
    const newCart = await ordersAPI.addItemToCart(itemId);
    setCart(newCart);
  };

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
    setCart(updatedCart)
  }

  return (
   <main className="App">
     {user ?
        <>
          <ResponsiveAppBar itemQty={ cart ? cart.lineItems.length : 0 }/>
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path='/items/:id' element={<ItemDetailPage handleAddToOrder={ handleAddToOrder }/>} />
            <Route path="/orders/cart" element={<OrderDetailPage order={ cart } handleChangeQty={handleChangeQty} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/checkout/success/:id" element={cart ? <PaymentSuccessPage cart={ cart } setCart={ setCart }/> : null} />
          </Routes>
        </>
        :
        <AuthPage setUser={ setUser } />
      }
   </main>
  );
}

