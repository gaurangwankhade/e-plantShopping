import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    category: "Air Purifying Plants",
    plants: [
      { name: "Snake Plant", price: "$15.00", description: "Easy to care for, great air purifier", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_plant_Sansevieria_trifasciata.jpg/800px-Snake_plant_Sansevieria_trifasciata.jpg" },
      { name: "Peace Lily", price: "$18.00", description: "Elegant white flowers, purifies air", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/800px-Spathiphyllum_cochlearispathum_RTBG.jpg" },
      { name: "Spider Plant", price: "$12.00", description: "Fast growing, removes toxins", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chlorophytum_comosum_-_Spider_Plant.jpg/800px-Chlorophytum_comosum_-_Spider_Plant.jpg" },
      { name: "Boston Fern", price: "$14.00", description: "Lush green fronds, humidifier plant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Boston_fern_2.jpg/800px-Boston_fern_2.jpg" },
      { name: "Bamboo Palm", price: "$22.00", description: "Tropical look, removes benzene", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chamaedorea_seifrizii.jpg/800px-Chamaedorea_seifrizii.jpg" },
      { name: "Dracaena", price: "$16.00", description: "Colorful leaves, air cleaning", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Dracaena_fragrans_-_Corn_Plant.jpg/800px-Dracaena_fragrans_-_Corn_Plant.jpg" },
    ],
  },
  {
    category: "Succulents",
    plants: [
      { name: "Aloe Vera", price: "$10.00", description: "Medicinal plant, very low maintenance", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/800px-Aloe_vera_flower_inset.png" },
      { name: "Echeveria", price: "$8.00", description: "Beautiful rosette shape, drought tolerant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Echeveria_colorata.jpg/800px-Echeveria_colorata.jpg" },
      { name: "Jade Plant", price: "$14.00", description: "Brings good luck, long living", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Crassula_ovata.jpg/800px-Crassula_ovata.jpg" },
      { name: "Haworthia", price: "$9.00", description: "Compact size, perfect for desks", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Haworthia_attenuata2.jpg/800px-Haworthia_attenuata2.jpg" },
      { name: "Sedum", price: "$7.00", description: "Star shaped flowers, very hardy", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sedum_spectabile_Herbstfreude_1.jpg/800px-Sedum_spectabile_Herbstfreude_1.jpg" },
      { name: "Agave", price: "$20.00", description: "Bold spiky look, drought resistant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Agave_americana_2.jpg/800px-Agave_americana_2.jpg" },
    ],
  },
  {
    category: "Tropical Plants",
    plants: [
      { name: "Monstera", price: "$25.00", description: "Iconic split leaves, easy to grow", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Monstera_deliciosa2.jpg/800px-Monstera_deliciosa2.jpg" },
      { name: "Bird of Paradise", price: "$30.00", description: "Stunning tropical beauty", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bird_of_Paradise_Flower.jpg/800px-Bird_of_Paradise_Flower.jpg" },
      { name: "Pothos", price: "$9.00", description: "Perfect for beginners, trailing vines", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Epipremnum_aureum_31082012.jpg/800px-Epipremnum_aureum_31082012.jpg" },
      { name: "Rubber Plant", price: "$19.00", description: "Glossy leaves, easy care", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ficus_elastica_26022006.jpg/800px-Ficus_elastica_26022006.jpg" },
      { name: "Philodendron", price: "$17.00", description: "Heart shaped leaves, fast grower", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Philodendron_hederaceum_edit.jpg/800px-Philodendron_hederaceum_edit.jpg" },
      { name: "Calathea", price: "$21.00", description: "Beautiful patterned leaves, unique", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Calathea_ornata.jpg/800px-Calathea_ornata.jpg" },
    ],
  },
];

function ProductList({ onCartClick, cartCount, setCartCount }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setCartCount((prev) => prev + 1);
  };

  const isInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px", backgroundColor: "#2e7d32", color: "white", position: "sticky", top: 0, zIndex: 100 }}>
        <h2>🌿 Paradise Nursery</h2>
        <span onClick={onCartClick} style={{ fontSize: "1.5rem", cursor: "pointer", color: "white" }}>
          🛒 Cart ({totalCartItems})
        </span>
      </nav>

      <h2 style={{ textAlign: "center", color: "#2e7d32", margin: "30px 0" }}>
        🌿 Our Plants
      </h2>

      {products.map((category) => (
        <div key={category.category} style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#388e3c", borderBottom: "2px solid #4CAF50", paddingBottom: "8px" }}>
            {category.category}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "15px" }}>
            {category.plants.map((plant) => (
              <div
                key={plant.name}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "15px",
                  width: "220px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                />
                <h4 style={{ margin: "10px 0 5px", color: "#1b5e20" }}>{plant.name}</h4>
                <p style={{ fontSize: "0.85rem", color: "#555", marginBottom: "8px" }}>{plant.description}</p>
                <p style={{ fontWeight: "bold", color: "#2e7d32", marginBottom: "10px" }}>{plant.price}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.name)}
                  style={{
                    backgroundColor: isInCart(plant.name) ? "#aaa" : "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "8px 20px",
                    borderRadius: "20px",
                    cursor: isInCart(plant.name) ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                  }}
                >
                  {isInCart(plant.name) ? "Added ✓" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
