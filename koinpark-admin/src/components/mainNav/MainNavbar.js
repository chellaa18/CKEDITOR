// MainNavbar.js
import React from "react";
import { Link } from "react-router-dom";

const MainNavbar = ({ activeContent, onToggleSidebar, isSidebarOpen }) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark border"  style={{
        position: "fixed",
        width: "100%",
        zIndex: 900, // Set a higher zIndex than the sidebar
        transition: "margin-left 0.5s ease", // Adjust duration and timing function as needed
        marginLeft: isSidebarOpen ? '250px' : '0',
        backgroundColor:"red"
      }}>
    
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
          <div className="collapse navbar-collapse d-flex" id="navbarNav">
          <Link className="me-3" onClick={onToggleSidebar}>
          {isSidebarOpen ? "Close" : "Open"}
        </Link>
            <h4>Navbar</h4>
          </div>
        </div>
      </nav>
    );
  };

export default MainNavbar;