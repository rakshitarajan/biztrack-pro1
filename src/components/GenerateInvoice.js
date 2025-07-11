import React, { useState } from "react";
import axios from "axios";

const GenerateInvoice = () => {
    const [products, setProducts] = useState([{ name: "", quantity: "", price: "" }]);
    const [message, setMessage] = useState("");

    const handleProductChange = (index, field, value) => {
        const updated = [...products];
        updated[index][field] = value;
        setProducts(updated);
    };

    const handleAddProduct = () => {
        setProducts([...products, { name: "", quantity: "", price: "" }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const filtered = products.filter(p => p.name && p.quantity && p.price);
        if (filtered.length === 0) {
            setMessage("Please add at least one valid product.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/invoices/generate", {
                products: filtered,
            });
            setMessage("Invoice generated ✅");
            setProducts([{ name: "", quantity: "", price: "" }]);
        } catch (err) {
            console.error(err);
            setMessage("Error generating invoice ❌");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Generate Invoice</h2>
            <form onSubmit={handleSubmit}>
                {products.map((item, index) => (
                    <div className="row mb-3" key={index}>
                        <div className="col-md-4 mb-2">
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="form-control"
                                value={item.name}
                                onChange={(e) => handleProductChange(index, "name", e.target.value)}
                            />
                        </div>
                        <div className="col-md-3 mb-2">
                            <input
                                type="number"
                                placeholder="Quantity"
                                className="form-control"
                                value={item.quantity}
                                onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
                            />
                        </div>
                        <div className="col-md-3 mb-2">
                            <input
                                type="number"
                                placeholder="Price"
                                className="form-control"
                                value={item.price}
                                onChange={(e) => handleProductChange(index, "price", e.target.value)}
                            />
                        </div>
                    </div>
                ))}
                <div className="d-flex gap-2">
                    <button type="button" className="btn btn-outline-secondary" onClick={handleAddProduct}>
                        ➕ Add Product
                    </button>
                    <button type="submit" className="btn btn-success">
                        🧾 Generate Invoice
                    </button>
                </div>
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
    );
};

export default GenerateInvoice;
