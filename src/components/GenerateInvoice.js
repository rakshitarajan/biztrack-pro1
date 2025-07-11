import React, { useState } from "react";
import axios from "axios";

const GenerateInvoice = () => {
  const [products, setProducts] = useState([{ name: "", quantity: "", price: "" }]);
  const [message, setMessage] = useState("");

 const handleProductChange = (index, field, value) => {
  const updated = [...products];
  updated[index][field] =
    field === "quantity" || field === "price" ? Number(value) : value;
  setProducts(updated);
};

  const handleAddProduct = () => {
    setProducts([...products, { name: "", quantity: "", price: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validProducts = products.filter(
      (p) => p.name.trim() !== "" && p.quantity && p.price
    );

    if (validProducts.length === 0) {
      setMessage("❌ Please add at least one valid product.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/invoices/generate", {
        products: validProducts,
      });
      setMessage(`✅ Invoice saved as: ${res.data.invoice.invoiceFile}`);
      setProducts([{ name: "", quantity: "", price: "" }]); // reset
    } catch (err) {
      console.error(err);
      setMessage("❌ Error generating invoice");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Generate Invoice</h2>
      <form onSubmit={handleSubmit}>
        {products.map((product, index) => (
          <div className="row mb-2" key={index}>
            <div className="col">
              <input
                type="text"
                placeholder="Product Name"
                className="form-control"
                value={product.name}
                onChange={(e) => handleProductChange(index, "name", e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="number"
                placeholder="Quantity"
                className="form-control"
                value={product.quantity}
                onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="number"
                placeholder="Price"
                className="form-control"
                value={product.price}
                onChange={(e) => handleProductChange(index, "price", e.target.value)}
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary me-2" onClick={handleAddProduct}>
          Add Product
        </button>
        <button type="submit" className="btn btn-primary">Generate</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default GenerateInvoice;
