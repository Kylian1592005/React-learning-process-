import { useEffect, useState } from 'react'
import { ProdcutsGrid } from './ProductsGrid'
import { Header } from '../../components/Header'
import './HomePage.css'
import axios from 'axios'
import { useSearchParams } from 'react-router'
 
export function HomePage( {cart, loadCart} ) {
  const[products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };
    getHomeData();
  }, [search]);

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