import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import UserNavbar from "../components/Customer/UserNavbar";
import MainLayout from "../components/Customer/MainLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: <MainLayout />, // layout route
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
