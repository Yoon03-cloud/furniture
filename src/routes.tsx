import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import RouteLayout from "./pages/RouteLayout";
import Error from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
