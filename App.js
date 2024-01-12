import logo from "./logo.svg";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
