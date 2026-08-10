import "./globals.css";
import { CartProvider } from "../components/CartContext";

export const metadata = {
  title: "Food Delivery System",
  description: "Order food easily",
};

export default function RootLayout({ children }) {
  return (
    import Footer from "../components/Footer";

    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
