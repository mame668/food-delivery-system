"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-10">
            {cart.map((item, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </li>
            ))}
          </ul>

          <div className="text-2xl font-bold mb-6">
            Total: ${total.toFixed(2)}
          </div>

          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
