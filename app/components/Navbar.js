export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-500">Food Delivery</h1>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-red-500 cursor-pointer">Home</li>
        <li className="hover:text-red-500 cursor-pointer">Menu</li>
        <li className="hover:text-red-500 cursor-pointer">Orders</li>
        <li className="hover:text-red-500 cursor-pointer">Contact</li>
        <li className="hover:text-red-500 cursor-pointer">
  <a href="/cart">Cart</a>
</li>

      </ul>
    </nav>
  );
}
