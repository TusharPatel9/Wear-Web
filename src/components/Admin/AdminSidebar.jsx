import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdLocalOffer,
  MdAdd,
  MdHome,
  MdElectricalServices,
  MdCategory,
  MdLocalMall,
  MdLogout,
} from "react-icons/md";

function AdminSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "dashboard", icon: <MdDashboard /> },
    { name: "Coupons", path: "coupons", icon: <MdLocalOffer /> },
    { name: "Add New Coupon", path: "add-coupon", icon: <MdAdd /> },
    { name: "Home Page", path: "home", icon: <MdHome /> },
    { name: "Electronics Category", path: "electronics", icon: <MdElectricalServices /> },
    { name: "Shop By Category", path: "shop-category", icon: <MdCategory /> },
    { name: "Deals", path: "deals", icon: <MdLocalMall /> },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">

      {/* Menu */}
      <div className="mt-8 flex flex-col gap-7 px-5">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-3 text-[16px]
              ${
                isActive
                  ? "bg-teal-600 text-white rounded-full"
                  : "text-teal-600"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <div className="px-5 pb-6">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-4 px-5 py-3 text-teal-600"
        >
          <MdLogout className="text-xl" />
          Logout
        </button>
      </div>

    </div>
  );
}

export default AdminSidebar;