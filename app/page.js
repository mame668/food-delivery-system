import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

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
      <section className="px-6 py-16 bg-white">
  <h2 className="text-4xl font-bold text-gray-900 mb-10">Popular Dishes</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    
    {/* Item 1 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
      <img src="/food1.png" alt="Burger" className="rounded-xl mb-4" />
      <h3 className="text-2xl font-semibold">Classic Burger</h3>
      <p className="text-gray-600 mt-2">$8.99</p>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Add to Cart
      </button>
    </div>

    {/* Item 2 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
      <img src="/food2.png" alt="Pizza" className="rounded-xl mb-4" />
      <h3 className="text-2xl font-semibold">Pepperoni Pizza</h3>
      <p className="text-gray-600 mt-2">$12.50</p>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Add to Cart
      </button>
    </div>

    {/* Item 3 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
      <img src="/food3.png" alt="Pasta" className="rounded-xl mb-4" />
      <h3 className="text-2xl font-semibold">Creamy Pasta</h3>
      <p className="text-gray-600 mt-2">$10.25</p>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Add to Cart
      </button>
    </div>

  </div>
</section>

    </div>
  );
}
