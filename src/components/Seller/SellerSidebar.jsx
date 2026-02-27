import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdShoppingBag,
  MdInventory2,
  MdAdd,
  MdPayment,
  MdReceiptLong,
  MdPerson,
  MdLogout,
} from "react-icons/md";

function SellerSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "dashboard", icon: <MdDashboard /> },
    { name: "Orders", path: "orders", icon: <MdShoppingBag /> },
    { name: "Products", path: "products", icon: <MdInventory2 /> },
    { name: "Add Product", path: "add-product", icon: <MdAdd /> },
    { name: "Payment", path: "payment", icon: <MdPayment /> },
    { name: "Transaction", path: "transaction", icon: <MdReceiptLong /> },
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

      {/* Bottom */}
      <div className="px-5 pb-6 flex flex-col gap-4">
        <NavLink
          to="account"
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-3 text-[16px]
            ${
              isActive
                ? "bg-teal-600 text-white rounded-full"
                : "text-teal-600"
            }`
          }
        >
          <MdPerson className="text-xl" />
          Account
        </NavLink>

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

export default SellerSidebar;