import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

export function CartItemDetails({ cartItem, loadCart }) {
  const [update, setUpdate] = useState(false);
  const [quantity, setQuantity] = useState([cartItem.quantity]);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const updateQuantity = async() => {
    if (update) {
      axios.put(`api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity)
      })
      await loadCart();
      setUpdate(false);
    }
    else 
      {setUpdate(true)};
  };

  const changeQuantity = (event) => {
    setQuantity(event.target.value);
  }

  const handleQuantityKeyDown = (event) => {
    if(event.key === "Enter") {
      updateQuantity();
    } else if(event.key === "Escape") {
      setQuantity(cartItem.quantity);
      setUpdate(false);
    }
  }

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity: 
            {update === true 
            ? 
              <input type="text" style={{ width: 50 }} value={quantity} 
              onChange={changeQuantity} onKeyDown={handleQuantityKeyDown}
              />
            : 
              <span className="quantity-label">{cartItem.quantity}</span>
            }
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateQuantity}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
