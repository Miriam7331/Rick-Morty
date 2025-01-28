import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <nav>
          <ul>
            <Link className="btn btn-outline-primary" to="/">
              <li>Home</li>
            </Link>
            <Link className="btn btn-outline-primary" to="/BlogCharacters">
              <li>Blog</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
