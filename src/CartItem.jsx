import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const calculateTotalCost = (item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return (price * item.quantity).toFixed(2);
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  return (
    <div style={{ padding: "20px", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px", backgroundColor: "#2e7d32", color: "white", marginBottom: "20px" }}>
        <h2>🌿 Paradise Nursery</h2>
        <h3 style={{ color: "white" }}>Shopping Cart</h3>
      </nav>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>Your cart is empty 🌱</p>
          <button
            onClick={handleContinueShopping}
            style={{
              marginTop: "20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "10px 30px",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {cartItems.map((item) => (
            <div
              key={item.name}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "15px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
              />
              <div style={{ flex: 1 }}>
                <h4 style={{ color: "#1b5e20", margin: "0 0 5px" }}>{item.name}</h4>
                <p style={{ color: "#2e7d32", fontWeight: "bold", margin: "0 0 5px" }}>
                  Unit Price: {item.price}
                </p>
                <p style={{ color: "#555", margin: "0 0 10px" }}>
                  Total Cost: ${calculateTotalCost(item)}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    onClick={() => handleDecrement(item)}
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item)}
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                style={{
                  backgroundColor: "#e53935",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Delete
              </button>
            </div>
          ))}

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#1b5e20", textAlign: "right", marginBottom: "15px" }}>
              Total Amount: ${calculateTotalAmount()}
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={handleContinueShopping}
                style={{
                  backgroundColor: "#fff",
                  color: "#4CAF50",
                  border: "2px solid #4CAF50",
                  padding: "10px 25px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Continue Shopping
              </button>
              <button
                onClick={() => alert("Checkout Coming Soon! 🌿")}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "10px 25px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
