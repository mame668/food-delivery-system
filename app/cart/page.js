"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div className="px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
