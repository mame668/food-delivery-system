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
    </div>
  );
}
