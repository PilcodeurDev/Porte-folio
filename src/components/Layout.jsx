/**
 * The external imports
 */
import { Outlet } from "react-router-dom";

/**
 * The internal imports
 */
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  );
}
export default Layout;
