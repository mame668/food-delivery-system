export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-2xl font-bold mb-6 md:mb-0">
          Food Delivery System
        </h2>

        <ul className="flex gap-6 text-gray-300">
          <li className="hover:text-white transition"><a href="/">Home</a></li>
          <li className="hover:text-white transition"><a href="/orders">Orders</a></li>
          <li className="hover:text-white transition"><a href="/contact">Contact</a></li>
          <li className="hover:text-white transition"><a href="/checkout">Checkout</a></li>
        </ul>
      </div>

      <p className="text-center text-gray-400 mt-6">
        © {new Date().getFullYear()} Food Delivery System — All rights reserved.
      </p>
    </footer>
  );
}
