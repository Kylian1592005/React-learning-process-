import { Header } from "../../components/header";
import { useState, useEffect } from "react";
import "./OrdersPage.css";
import axios from "axios";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
     
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrderData();

  }, []);

  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />

      </div>
    </>
  );
}
