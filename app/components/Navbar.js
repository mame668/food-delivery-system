"use client";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Navbar({ onCartOpen }) {
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-red-500">Food Delivery</h1>

      <button
        onClick={onCartOpen}
        className="relative px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Cart
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
            {cart.length}
          </span>
        )}
      </button>
    </nav>
  );
}
