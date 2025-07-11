import React, { useEffect, useState } from "react";
import axios from "axios";

const AllInvoices = () => {
  const [invoices, setInvoices] = useState([]);

 useEffect(() => {
  const fetchInvoices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/invoices");
      setInvoices(response.data);
    } catch (error) {
      console.error("Error fetching invoices", error);
    }
  };
  fetchInvoices();
}, []);


  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">📄 All Invoices</h2>
      {invoices.length === 0 ? (
        <div className="alert alert-warning">No invoices found.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Total Amount</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv, index) => (
                <tr key={inv._id}>
                  <td>{index + 1}</td>
                  <td>{new Date(inv.createdAt).toLocaleString()}</td>
                  <td>₹{inv.totalAmount}</td>
                  <td>
                    <a
                      className="btn btn-sm btn-primary"
                      href={`http://localhost:5000/invoices/${inv.invoiceFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllInvoices;
