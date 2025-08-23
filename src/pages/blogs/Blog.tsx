import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <>
      <div>blog</div>;
      <Outlet />
    </>
  );
}

export default Blog;
