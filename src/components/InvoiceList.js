import React, { useEffect, useState } from "react";
import axios from "axios";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/invoices")
      .then((res) => setInvoices(res.data))
      .catch((err) => console.error("Error fetching invoices:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Invoices</h2>
      {invoices.length === 0 ? (
        <p>No invoices found.</p>
      ) : (
        <ul className="list-group">
          {invoices.map((invoice) => (
            <li className="list-group-item" key={invoice._id}>
              🧾 <strong>Total:</strong> ₹{invoice.totalAmount} —
              <a
                href={`http://localhost:5000/invoices/${invoice.invoiceFile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InvoiceList;
