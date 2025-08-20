import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
function RouteLayout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Outlet />
    </div>
  );
}

export default RouteLayout;
