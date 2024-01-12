import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="container border">
        {" "}
        <div>
          <h4 className="mt-2 p-2">Dashboard</h4>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between m-1">
            <div
              className="p-4 border rounded"
              style={{ backgroundColor: "#3A3A57", width: "300px" }}
            >
              <h6 className="text-white">Register</h6>
            </div>
            <div
              className=" p-4 border rounded"
              style={{ backgroundColor: "#224843", width: "300px" }}
            >
              <h6 className="text-white">User Indian Kyc</h6>{" "}
            </div>
            <div
              className=" p-4 border rounded"
              style={{ backgroundColor: "#482230", width: "300px" }}
            >
              <h6 className="text-white">User Non-Indian Kyc</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between m-1">
            <div
              className="  p-4 border rounded"
              style={{ backgroundColor: "#0E865E", width: "300px" }}
            >
              {" "}
              <h6 className="text-white">Bank</h6>
            </div>
            <div
              className=" p-4 border rounded"
              style={{ backgroundColor: "#803A11", width: "300px" }}
            >
              {" "}
              <h6 className="text-white">Deposit Fiat</h6>
            </div>
            <div
              className=" p-4 border rounded"
              style={{ backgroundColor: "#117680", width: "300px" }}
            >
              {" "}
              <h6 className="text-white">Deposit crypto</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between m-1">
            <div
              className="  p-4 border rounded"
              style={{ backgroundColor: "#4E1180", width: "300px" }}
            >
              {" "}
              <h6 className="text-white">Withdraw Fiat</h6>
            </div>
            <div
              className=" p-4 border rounded"
              style={{ backgroundColor: "#807911", width: "300px" }}
            >
              <h6 className="text-white">Withdraw Crypto</h6>
            </div>
            <div
              className=" p-4 border rounded"
              style={{ backgroundColor: "#865132", width: "300px" }}
            >
              <h6 className="text-white">Coinowners Indian Kyc</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between m-1">
            <div
              className="  p-4 border rounded"
              style={{ backgroundColor: "#511DC4", width: "300px" }}
            >
              <h6 className="text-white">Coinowners Non-Indian Kyc</h6>
            </div>
            <div
              className=" p-4 border rounded"
              style={{ backgroundColor: "#511DC4", width: "300px" }}
            ><h6 className="text-white">Corporate Indian Kyc</h6></div>
            <div
              className=" p-4 border rounded"
              style={{ backgroundColor: "#511DC4", width: "300px" }}
            ><h6 className="text-white">Corporate Non-Indian Kyc</h6></div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-lg-12 d-flex m-1">
            <div
              className="  p-4 border rounded"
              style={{ backgroundColor: "#9E3F5E", width: "300px" }}
            ><h6 className="text-white">Upl Count</h6></div>
            {/* <div className=" p-5 border rounded"  style={{ backgroundColor: "#224843", width:'300px' }}></div> */}
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <p
          className="text-center my-3"
          style={{ fontSize: "24px", color: "rgb(253 166 113)" }}
        >
          Important Note
        </p>
        <div className="row">
          <table class="table">
            <thead class="bg-secondary">
              <td className="p-3 text-dark ">S.no</td>
              <td className="p-3 text-dark">Type</td>
              <td className="p-3 text-dark">Note</td>
            </thead>
            <tbody>
              <td className="p-3 text-dark">S.no</td>
              <td className="p-3">content 1</td>
              <td className="p-3">content 1</td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
