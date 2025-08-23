import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/Contact";
import RouteLayout from "./pages/RouteLayout";
import Error from "./pages/error";
import BlogPage from "./pages/blogs/blog";
import BlogsDetailPage from "./pages/blogs/blogsDetail";
import BlogRootLayout from "./pages/blogs/BlogRootLayout";

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
    ],
  },
]);
