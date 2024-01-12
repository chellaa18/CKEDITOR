


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "../mainNav/MainNavbar";
import Dashboard from "../dashboard/Dashboard";
import "./Admin.css"
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

          <main className="w-100">
            <MainNavbar activeContent={activeContent} onToggleSidebar={toggleSidebar}  isSidebarOpen={sidebarOpen}/>
            {activeContent === "dashboard" && <Dashboard />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;


//Admin.css


.sidebar-closed {
    margin-left: 0;
}

.sidebar {
    width: 250px; 
    transition: margin-left 0.5s; 
}

.sidebar.closed {
    margin-left: -250px; 
    overflow: hidden;
}

.active {
    background-color: rgba(77, 72, 72, 0.3);
    border-radius: 8px; 
  }
