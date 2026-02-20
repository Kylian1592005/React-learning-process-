import { useState, useEffect } from "react";
import axios from "axios";
import "./CheckOutPage.css";
import { CheckOutHeader } from "./CheckOutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckOutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummay] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response =  await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
      setDeliveryOptions(response.data);
    
      response = axios.get("/api/payment-summary");
      setPaymentSummay(response.data);
    };

    fetchCheckoutData();
  }, []);

  return (
    <>
      <link rel="icon" href="cart-favicon.png" />
      <title>Checkout</title>
      <CheckOutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/> 

          <PaymentSummary paymentSummary={paymentSummary}/>
        </div>
      </div>
    </>
  );
}
