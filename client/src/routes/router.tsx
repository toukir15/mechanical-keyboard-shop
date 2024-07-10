import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import ProductsList from "@/pages/Dashboard/ProductsList";
import AddProduct from "@/pages/Dashboard/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/dashboard/product-list",
        element: <ProductsList />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);
