"use client";
import { useContext } from "react";
import { CartContext } from "../../../components/CartContext";

export default function FoodDetails({ params }) {
  const { addToCart } = useContext(CartContext);

  const foods = {
    classicburger: {
      name: "Classic Burger",
      price: 8.99,
      img: "/food1.png",
      desc: "Juicy beef burger with cheese and fresh vegetables."
    },
    pepperonipizza: {
      name: "Pepperoni Pizza",
      price: 12.50,
      img: "/food2.png",
      desc: "Cheesy pizza topped with crispy pepperoni."
    },
    creamypasta: {
      name: "Creamy Pasta",
      price: 10.25,
      img: "/food3.png",
      desc: "Italian-style creamy pasta with herbs."
    },

    shiro: {
      name: "Shiro",
      price: 6.50,
      img: "/shiro.png",
      desc: "Traditional Ethiopian chickpea stew."
    },
    dorowat: {
      name: "Doro Wat",
      price: 12.00,
      img: "/dorowat.png",
      desc: "Spicy Ethiopian chicken stew."
    },
    tibs: {
      name: "Tibs",
      price: 10.00,
      img: "/tibs.png",
      desc: "Sautéed beef with onions and spices."
    },
    firfir: {
      name: "Firfir",
      price: 8.00,
      img: "/firfir.png",
      desc: "Shredded injera mixed with spicy sauce."
    },
    kitfo: {
      name: "Kitfo",
      price: 14.00,
      img: "/kitfo.png",
      desc: "Minced raw beef seasoned with mitmita and butter."
    },
    sambusa: {
      name: "Sambusa",
      price: 3.00,
      img: "/sambusa.png",
      desc: "Crispy pastry filled with lentils."
    }
  };

  const food = foods[params.name];

  if (!food) {
    return <div className="p-10 text-xl">Food not found.</div>;
  }

  return (
    <div className="px-6 py-16 max-w-xl mx-auto">
      <img src={food.img} alt={food.name} className="rounded-xl w-full mb-6" />

      <h1 className="text-4xl font-bold">{food.name}</h1>
      <p className="text-gray-600 mt-4">{food.desc}</p>

      <p className="text-2xl font-bold mt-6">${food.price}</p>

      <button
        onClick={() => addToCart(food)}
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
