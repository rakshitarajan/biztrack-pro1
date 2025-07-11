import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/invoices')
            .then(response => setInvoices(response.data))
            .catch(error => console.error('Error fetching invoices:', error));
    }, []);

    return (
        <div className="container mt-4">
            <h2>All Invoices</h2>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Total Amount</th>
                        <th>Date</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr key={invoice._id}>
                            <td>{index + 1}</td>
                            <td>₹{invoice.totalAmount}</td>
                            <td>{new Date(invoice.createdAt).toLocaleString()}</td>
                            <td>
                                <a
                                    href={`http://localhost:5000/api/invoices/download/${invoice.invoiceFile}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-primary"
                                >
                                    Download PDF
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceList;
