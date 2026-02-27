import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CiShop } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function UserNavbar() {
  const links = ["Men", "Women", "Kids", "Watch"];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 h-16 flex items-center justify-between px-6 md:px-16 transition-all duration-300
        ${scrolled
            ? "bg-white/70 backdrop-blur-md shadow-md"
            : "bg-white"
          }`}
      >
        {/* LEFT SECTION */}
        <div className="flex items-center gap-10">
          <h1
            className="text-2xl md:text-3xl text-teal-600 tracking-wide"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Wear Web
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
            {links.map((item, index) => (
              <li
                key={index}
                className="hover:text-teal-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-8 text-gray-600">
          <IoMdSearch className="text-xl cursor-pointer hover:text-teal-600 transition" />

          <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-700 transition"
            onClick={() => { navigate("/login") }}>
            <CgProfile className="text-lg" />
            LOGIN
          </button>

          <FaRegHeart className="text-xl cursor-pointer hover:text-teal-600 transition" />

          <TiShoppingCart className="text-xl cursor-pointer hover:text-teal-600 transition" />

          <button className="flex items-center gap-2 border border-teal-600 text-teal-600 px-4 py-1.5 rounded-md font-medium hover:bg-teal-50 transition">
            <CiShop className="text-lg" />
            BECOME SELLER
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl">
          {menuOpen ? (
            <HiX onClick={() => setMenuOpen(false)} />
          ) : (
            <HiMenu onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md md:hidden z-40">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            {links.map((item, index) => (
              <li key={index} className="hover:text-teal-600 cursor-pointer">
                {item}
              </li>
            ))}
            <button className="bg-teal-600 text-white px-6 py-2 rounded-md"
              onClick={() => { navigate("/login") }}>
              LOGIN
            </button>
          </ul>
        </div>
      )}

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default UserNavbar;