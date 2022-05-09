import './App.css';
import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { getUser } from '../../utilities/users-service'
import ResponsiveAppBar from '../../components/AppBar/AppBar'
import ShopPage from '../ShopPage/ShopPage'
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
   <main className="App">
     {user ?
        <>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path='/items/:id' element={<ItemDetailPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={ setUser } />
      }
   </main>
  );
}

