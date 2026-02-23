import { useEffect, useState } from 'react'
import { ProdcutsGrid } from './ProductsGrid'
import { Header } from '../../components/header'
import './HomePage.css'
import axios from 'axios'
 
export function HomePage( {cart, loadCart} ) {
  const[products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
     <>
      <link rel="icon" href="/home-favicon.png" />

      <title>Ecommerce Project</title>
      <Header cart={cart}/>

      <div className="home-page">
        <ProdcutsGrid products={products} loadCart={loadCart}/>
      </div>   
    </>
  )
}