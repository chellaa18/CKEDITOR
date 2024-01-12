// MainNavbar.js
import React from "react";
import { Link } from "react-router-dom";

const MainNavbar = ({ activeContent }) => {
  const getTitle = () => {
    switch (activeContent) {
      case "dashboard":
        return "Dashboard";
      case "User Detail":
        return "User Detail";
      case "products":
        return "Products";
      case "ContentTable":
        return "Content Table";
      default:
        return "Admin Panel";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark border">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5" >
                {getTitle()}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;