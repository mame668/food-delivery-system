export default function ContactPage() {
  return (
    <div className="px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form className="max-w-lg bg-gray-50 p-6 rounded-xl shadow space-y-6">
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg"
            placeholder="Your email"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            className="w-full p-3 border rounded-lg"
            rows="5"
            placeholder="Your message"
          ></textarea>
        </div>

        <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Send Message
        </button>
      </form>
    </div>
  );
}
