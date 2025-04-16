import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <div>
                  <h2 className="text-xl">{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-500 text-white rounded mr-2"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-500 text-white rounded ml-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-xl">Total Quantity: {totalQuantity}</h3>
        <h3 className="text-xl">Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>

      <div className="mt-4">
        <h2 className="text-xl">Add Products</h2>
        <button
          onClick={() => handleAddItem({ id: 1, name: "Product 1", price: 10 })}
          className="px-6 py-2 bg-blue-500 text-white rounded mr-2"
        >
          Add Product 1
        </button>
        <button
          onClick={() => handleAddItem({ id: 2, name: "Product 2", price: 20 })}
          className="px-6 py-2 bg-blue-500 text-white rounded"
        >
          Add Product 2 
        </button>
      </div>
    </div>
  );
};

export default Cart;
