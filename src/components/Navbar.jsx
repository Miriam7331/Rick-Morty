import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <nav>
          <ul>
            <NavLink className="btn btn-outline-primary" to="/">
              <li>Home</li>
            </NavLink>
            <NavLink className="btn btn-outline-primary" to="/Blog">
              <li>Blog</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}
