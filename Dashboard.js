import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
      <div className="border m-1 p-2">

      <div className="">
      <h4 className="mt-2 p-2">Dashboard</h4>
    </div>
    
    <div className="row">
      {" "}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#3A3A57" }}
        >
          <h6 className="text-white">Register</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#224843" }}
        >
          <h6 className="text-white">User Indian Kyc</h6>{" "}
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#482230" }}
        >
          <h6 className="text-white">User Non-Indian Kyc</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#0E865E" }}
        >
          <h6 className="text-white">Bank</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#803A11" }}
        >
          <h6 className="text-white">Deposit Fiat</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#117680" }}
        >
          <h6 className="text-white">Deposit crypto</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#4E1180" }}
        >
          <h6 className="text-white">Withdraw Fiat</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#807911" }}
        >
          <h6 className="text-white">Withdraw Crypto</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#865132" }}
        >
          <h6 className="text-white">Coinowners Indian Kyc</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#511DC4" }}
        >
          <h6 className="text-white">Coinowners Non-Indian Kyc</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#511DC4" }}
        >
          <h6 className="text-white">Corporate Indian Kyc</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#511DC4" }}
        >
          <h6 className="text-white">Corporate Non-Indian Kyc</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="p-4 border rounded"
          style={{ backgroundColor: "#9E3F5E" }}
        >
          <h6 className="text-white">Upl Count</h6>
        </div>
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
        <table className="table">
          <thead className="bg-secondary">
            <th className="p-3 text-dark ">S.no</th>
            <th className="p-3 text-dark">Type</th>
            <th className="p-3 text-dark">Note</th>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 text-dark">S.no</td>
              <td className="p-3">content 1</td>
              <td className="p-3">content 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      </div>

      
    </>
  );
};

export default Dashboard;
