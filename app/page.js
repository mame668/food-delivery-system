"use client";
import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const items = [
    // Fast Food
    { name: "Classic Burger", price: 8.99, img: "/food1.png", category: "fastfood" },
    { name: "Pepperoni Pizza", price: 12.50, img: "/food2.png", category: "fastfood" },
    { name: "Creamy Pasta", price: 10.25, img: "/food3.png", category: "fastfood" },

    // Ethiopian Food
    { name: "Shiro", price: 6.50, img: "/shiro.png", category: "ethiopian" },
    { name: "Doro Wat", price: 12.00, img: "/dorowat.png", category: "ethiopian" },
    { name: "Tibs", price: 10.00, img: "/tibs.png", category: "ethiopian" },
    { name: "Firfir", price: 8.00, img: "/firfir.png", category: "ethiopian" },
    { name: "Kitfo", price: 14.00, img: "/kitfo.png", category: "ethiopian" },
    { name: "Sambusa", price: 3.00, img: "/sambusa.png", category: "ethiopian" },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search) &&
    (category === "all" || item.category === category)
  );

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-50">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Fast & Fresh Food Delivery
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Order your favorite meals from the best restaurants in your city.
            Delivered hot and fast right to your door.
          </p>

          <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
            Order Now
          </button>
        </div>

        <img
          src="/hero-food.png"
          alt="Food Delivery"
          className="w-80 md:w-96 mt-10 md:mt-0"
        />
      </section>

      {/* MENU SECTION */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Popular Dishes</h2>

        {/* CATEGORY BUTTONS */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {["all", "ethiopian", "fastfood", "breakfast", "lunch", "dinner"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg border ${
                category === cat ? "bg-red-500 text-white" : "bg-white"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search for food..."
          className="w-full p-3 mb-10 border rounded-lg shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />

        {/* FOOD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() =>
                window.location.href = `/food/${item.name.toLowerCase().replace(/ /g, "")}`
              }
            >
              <img src={item.img} alt={item.name} className="rounded-xl mb-4" />
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-2">${item.price}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevents opening details page
                  addToCart(item);
                }}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
