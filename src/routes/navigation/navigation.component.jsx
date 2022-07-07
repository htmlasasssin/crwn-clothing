import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Cart</a>
      <Outlet />
    </nav>
  )
}

export default Navigation;