import React, { useState } from "react";
import PatternLock from "react-pattern-lock";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [pattern, setPattern] = useState([]);

  // const handleReset = (e) => {
  //   e.preventDefault();
  //   setPattern([]);
  // };

  const handlePatternFinish = (newPattern) => {
    console.log("Pattern completed:", newPattern);
  };
  const onChange = (newPattern) => {
    setPattern(newPattern);
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row vh-100">
        <div
          className="d-flex justify-content-center align-items-center vh-100 "
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div
            className="col-lg-6 p-5 d-flex justify-content-center align-items-center "
            style={{
              borderStyle: "solid",
              borderWidth: "5px",
              borderImage: "linear-gradient(90deg,#068131,#dda85b) 1",
            }}
          >
            {" "}
            <form className="d-flex flex-column align-items-center">
              <h2
                className="mb-4"
                style={{ fontWeight: "900px", fontSize: "40px" }}
              >
                KoinPark
              </h2>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-3">
                <label>
                  {" "}
                  <span style={{ color: "#71797E", fontSize: "14px" }}>
                    TFA code
                  </span>
                </label>
                <br />
                <div className="input-group">
                  <input id="tfa" className="form-control" />
                </div>
              </div>

              <button
                type="submit"
                className="btn"
                style={{
                  backgroundImage:
                    "linear-gradient(314deg, #51713a 0%, #000e21 74%)",
                  color: "white",
                  border:"2px solid #007FFF"
                }}
              >
                Sign in
              </button>
            </form>
            <div className="my-2 mt-5">
              <div className="ms-3">
                <PatternLock
                  width={230}
                  pointSize={15}
                  size={3}
                  path={pattern}
                  onChange={onChange}
                  onFinish={handlePatternFinish}
                  style={{
                    background: "black",
                    borderRadius: "16px",
                    borderStyle: "solid",
                    borderWidth: "5px",
                    borderImage: "linear-gradient(90deg,#068131,#dda85b) 1",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
