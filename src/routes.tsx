import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/Contact";
import RouteLayout from "./pages/RouteLayout";
import Error from "./pages/error";
// import BlogPage from "./pages/blogs/Blog";
// import BlogsDetailPage from "./pages/blogs/BlogsDetail";
// import BlogRootLayout from "./pages/blogs/BlogRootLayout";
const BlogPage = lazy(() => import("./pages/blogs/Blog"));
const BlogsDetailPage = lazy(() => import("./pages/blogs/BlogsDetail"));
const BlogRootLayout = lazy(() => import("./pages/blogs/BlogRootLayout"));

import ProductRootLayout from "./pages/products/ProductRootLayout";
import ProductDetailPage from "./pages/products/ProductDetail";
import ProductPage from "./pages/products/Product";

// eslint-disable-next-line react-refresh/only-export-components
const SuspenseFallback = () => <div className="text-center">Loading ...</div>;
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
        element: (
          <Suspense fallback={<SuspenseFallback />}>
            <BlogRootLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <BlogPage />
              </Suspense>
            ),
          },
          {
            path: ":postID",
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <BlogsDetailPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "products",
        element: <ProductRootLayout />,
        children: [
          { index: true, element: <ProductPage /> },
          { path: ":productId", element: <ProductDetailPage /> },
        ],
      },
    ],
  },
]);
