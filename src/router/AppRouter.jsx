import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import UserNavbar from "../components/Customer/UserNavbar";
import MainLayout from "../components/Customer/MainLayout";
import HomePage from "../pages/HomePage";
import SellerSidebar from "../components/Seller/SellerSidebar";
import SellerLayout from "../components/Seller/SellerLayout";
import AdminLayout from "../components/Admin/AdminLayout";

const SellerDashboard = () => <div>Seller Dashboard</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;


const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />, // layout route
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/seller", element: <SellerLayout />,
    children: [
      { path: "dashboard", element: <SellerDashboard /> },
    ]
  },
  {
    path: "/admin", element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
