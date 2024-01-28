import logo from "./logo.svg";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";

import Admin from "./components/admin/Admin";
import ViewEventDetails from "./components/launchPad/ViewEventDetails";

function App() {
  return (
    <>
      <Routes>
       
        <Route path="/admin" element={<Admin />} />
        <Route path="/viewevent" element={<ViewEventDetails />} />
      </Routes>
    </>
  );
}

export default App;