import React, { useState } from "react";
const ProductListPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Shirt",
      description: " This is the Product Description",
      price: 10.99,
    },
    {
      id: 2,
      name: "Jeans",
      description: " This is the Product Description",
      price: 19.99,
    },
    {
      id: 3,
      name: "T-Shirt",
      description: " This is the Product Description",
      price: 7.99,
    },
  ]);

  const handleDelete = (itemId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2>Product Lists</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <h5>{item.description}</h5>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ProductListPage;
