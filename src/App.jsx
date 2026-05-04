import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleGetStarted = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
    setShowAbout(false);
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowAbout(false);
  };

  if (showCart) {
    return <CartItem onContinueShopping={handleContinueShopping} />;
  }

  if (showProductList) {
    return (
      <ProductList
        onCartClick={handleCartClick}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    );
  }

  if (showAbout) {
    return <AboutUs />;
  }

  return (
    <div className="landing-page">
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button
            className="get-started-button"
            style={{ padding: "8px 20px" }}
            onClick={() => setShowAbout(true)}
          >
            About Us
          </button>
          <span className="cart-icon" onClick={handleCartClick}>
            🛒 {cartCount > 0 && <span>({cartCount})</span>}
          </span>
        </div>
      </nav>

      <div>
        <h1>Welcome to Paradise Nursery</h1>
        <p>Where Every Plant Finds Its Home 🌱</p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
