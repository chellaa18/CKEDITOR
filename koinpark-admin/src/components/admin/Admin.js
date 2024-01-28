


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "../mainNav/MainNavbar";
import Dashboard from "../dashboard/Dashboard";
import "./Admin.css"
import { BrowserRouter as Router, Route, useParams, Routes } from "react-router-dom";
import ViewEventDetails from "../launchPad/ViewEventDetails";

const Admin = () => {
  const [activeContent, setActiveContent] = useState(
    localStorage.getItem("activeContent") || "dashboard"
  );

  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem("activeContent", activeContent);
  }, [activeContent]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleNavClick = (content) => {
    setActiveContent(content);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (

   
  
    
    <div className={`container-fluid ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="row px-0">
        <div className="col-lg-12 d-flex" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <nav
        id="sidebar"
        className={`col-lg-3 d-md-block bg-dark sidebar ${sidebarOpen ? 'open' : 'closed'}`}
        style={{
          backgroundColor: "#51713a",
          backgroundImage: "linear-gradient(314deg, #51713a 0%, #000e21 74%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "250px",
          height: "100vh", 
          position: "fixed", // Set position to fixed
          top: "0", // Adjust top position as needed
          bottom: "0",
          zIndex: 1000
        }}
      >
            <h4 className=" text-white text-center mt-4" style={{ fontWeight: "900px", fontSize: "40px" }}>
              KoinPark
            </h4>
            <div className="position-sticky mt-5">
              <ul className="nav flex-column p-3">
                <li className={`nav-item ${activeContent === "dashboard" ? "active" : ""}`}>
                  <a
                    className={`nav-link text-white px-2 ${activeContent === "dashboard" ? "active" : ""}`}
                    href="#"
                    onClick={() => handleNavClick("dashboard")}
                  >
                    Dashboard
                  </a>
                </li>
                <li className={`nav-item ${activeContent === "User Detail" ? "active" : ""}`}>
                  <a
                    className={`nav-link text-white px-2 ${activeContent === "User Detail" ? "active" : ""}`}
                    href="#"
                    onClick={() => handleNavClick("User Detail")}
                  >
                    User Detail
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <MainNavbar activeContent={activeContent} onToggleSidebar={toggleSidebar}  isSidebarOpen={sidebarOpen}></MainNavbar>
      
          <main className="w-100"  style={{ marginLeft: sidebarOpen ? '250px' : '0', marginTop:"60px" }} >
           
            {activeContent === "dashboard" && <Dashboard  />}
          
          </main>
        </div>
      </div>
    </div>


  );
};

export default Admin;





