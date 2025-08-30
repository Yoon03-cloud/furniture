import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/Contact";
import RouteLayout from "./pages/RouteLayout";
import Error from "./pages/error";
import BlogPage from "./pages/blogs/Blog";
import BlogsDetailPage from "./pages/blogs/BlogsDetail";
import BlogRootLayout from "./pages/blogs/BlogRootLayout";
import ProductRootLayout from "./pages/products/ProductRootLayout";
import ProductDetailPage from "./pages/products/ProductDetail";
import ProductPage from "./pages/products/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "blogs",
        element: <BlogRootLayout />,
        children: [
          { index: true, element: <BlogPage /> },
          { path: ":postID", element: <BlogsDetailPage /> },
        ],
      },
      {
        path: "products",
        element: <ProductRootLayout />,
        children: [
          { index: true, element: <ProductPage /> },
          { path: ":productID", element: <ProductDetailPage /> },
        ],
      },
    ],
  },
]);
