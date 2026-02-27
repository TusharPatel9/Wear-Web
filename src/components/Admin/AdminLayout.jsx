import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { MdMenu } from "react-icons/md";

function AdminLayout() {
  return (
    <div className="h-screen flex flex-col bg-white">
      
      {/* Header */}
      <div className="w-full flex items-center gap-3 px-6 py-5 border-b border-gray-200">
        <MdMenu className="text-2xl text-teal-600" />
        <h1
          className="text-xl font-semibold text-black"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Wear Web
        </h1>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;