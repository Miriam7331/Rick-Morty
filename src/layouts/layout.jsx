import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function layout() {
  return (
    <div className="container">
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <footer>Este es nuestro footer</footer>
    </div>
  );
}
