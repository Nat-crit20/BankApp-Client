import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-child">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
