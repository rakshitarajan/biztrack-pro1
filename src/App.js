import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenerateInvoice from "./components/GenerateInvoice";
import AllInvoices from "./components/AllInvoices";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GenerateInvoice />} />
        <Route path="/invoices" element={<AllInvoices />} />
      </Routes>
    </Router>
  );
}

export default App;
