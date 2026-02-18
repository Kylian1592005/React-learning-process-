import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckOutPage } from './pages/checkout/CheckOutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { NotFound } from './pages/NotFound'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const[cart, setCart] = useState([]);

    useEffect(() => {
       axios.get('/api/cart-items')
        .then((response) => {
          setCart(response.data);
        })
    }, []);
   
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckOutPage cart={cart} />} /> 
      <Route path='orders' element={<OrdersPage />} /> 
      <Route path='tracking' element={<TrackingPage />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
