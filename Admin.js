import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Contents from "./contents/Contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faClipboard,
  faBox,
  faAddressBook,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
// import ContentTable from "./contentsTable/ContentTable";
import MainNavbar from "../mainNav/MainNavbar";
import UserDetail from "../userDetail/UserDetail";
import Dashboard from "../dashboard/Dashboard";

const Admin = () => {
  const [activeContent, setActiveContent] = useState(
    localStorage.getItem("activeContent") || "dashboard"
  );

  useEffect(() => {
    localStorage.setItem("activeContent", activeContent);
  }, [activeContent]);

  const handleNavClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="container-fluid ">
   
      <div className="row px-0">
        <div className="col-lg-12 d-flex" style={{paddingLeft:'0px', paddingRight:'0px'}}>
          <nav
            id="sidebar"
            className="col-lg-3 d-md-block bg-dark sidebar"
            style={{
              backgroundColor: "#51713a",
              backgroundImage:
                "linear-gradient(314deg, #51713a 0%, #000e21 74%)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
             
              width: "250px",
            }}
          >
            <h4
              className=" text-white text-center mt-4"
              style={{ fontWeight: "900px", fontSize: "40px" }}
            >
              KoinPark
            </h4>
            <div className="position-sticky mt-5">
            
              <ul className="nav flex-column p-3">
                <li
                  className={`nav-item ${
                    activeContent === "dashboard" ? "active" : ""
                  }`}
                >
                  <a
                    className={`nav-link text-white px-2 ${
                      activeContent === "dashboard" ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => handleNavClick("dashboard")}
                  >
                    <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
                    Dashboard
                  </a>
                </li>
                <li
                  className={`nav-item ${
                    activeContent === "User Detail" ? "active" : ""
                  }`}
                >
                  <a
                    className={`nav-link text-white px-2 ${
                      activeContent === "User Detail" ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => handleNavClick("User Detail")}
                  >
                    <FontAwesomeIcon icon={faClipboard} className="me-2" />
                    User Detail
                  </a>
                </li>
                {/* <li
                className={`nav-item ${
                  activeContent === "products" ? "active" : ""
                }`}
              >
                     <a
                  className={`nav-link text-white px-2 ${
                    activeContent === "products" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => handleNavClick("products")}
                > */}
                {/* <FontAwesomeIcon icon={faBox} className="me-2" /> */}
                {/* Products
                </a>
              </li> */}
              </ul>
            </div>
          </nav>

          <main className="w-100">
            <MainNavbar activeContent={activeContent} />
            {activeContent === "dashboard" && <Dashboard />}
            {activeContent === "User Detail" && <UserDetail />}
            {/* {activeContent === "products" && <h2>Products</h2>} */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
