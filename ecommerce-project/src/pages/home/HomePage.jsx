import axios from 'axios'
import { useEffect, useState } from 'react'
import { ProdcutsGrid } from './ProductsGrid'
import { Header } from '../../components/header'
import './HomePage.css'
 
export function HomePage( {cart} ) {
  const[products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
    })
  });

  return (
     <>
      <link rel="icon" href="/home-favicon.png" />

      <title>Ecommerce Project</title>
      <Header cart={cart}/>

      <div className="home-page">
        <ProdcutsGrid products={products}/>
      </div>   
    </>
  )
}