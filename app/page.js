import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold">Welcome to the Food Delivery System</h1>
        <p className="mt-4 text-gray-600">
          Order your favorite meals quickly and easily.
        </p>
      </div>
    </div>
  );
}
