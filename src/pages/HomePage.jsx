import React, { useEffect, useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
];

const products = [
  {
    id: 1,
    title: "Premium Hoodie",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    title: "Stylish Watch",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834",
  },
  {
    id: 3,
    title: "Sneakers",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    title: "Leather Jacket",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 5,
    title: "Casual T-Shirt",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f37f9b39",
  },
  {
    id: 6,
    title: "Sunglasses",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
];

function HomePage() {
  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section
        className="h-[98vh] bg-cover bg-center flex items-center justify-center text-white transition-all duration-700"
        style={{
          backgroundImage: `url(${heroImages[current]})`,
        }}
      >
        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Trendy collections for Men, Women & Kids
          </p>
          <button className="bg-teal-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-teal-700 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section className="px-16 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-teal-600 font-bold mb-4">
                  ₹ {item.price}
                </p>
                <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MORE PRODUCTS SECTION ================= */}
      <section className="px-16 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          New Arrivals
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="text-center group cursor-pointer">
              <img
                src={item.image}
                alt=""
                className="h-52 w-full object-cover rounded-lg group-hover:scale-105 transition"
              />
              <h4 className="mt-3 font-medium">{item.title}</h4>
              <p className="text-teal-600 font-semibold">
                ₹ {item.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 px-16 py-12">
        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Wear Web
            </h3>
            <p>
              Your one-stop shop for premium fashion and lifestyle products.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Men</li>
              <li className="hover:text-white cursor-pointer">Women</li>
              <li className="hover:text-white cursor-pointer">Kids</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              Subscribe
            </h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md text-black"
            />
            <button className="mt-3 w-full bg-teal-600 py-2 rounded-md hover:bg-teal-700 transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center mt-10 border-t border-gray-700 pt-6">
          © 2026 Wear Web. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default HomePage;