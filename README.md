# 📦 BizTrack Pro

**BizTrack Pro** is a full-stack web application designed to simplify inventory and billing management for small businesses. It allows users to add products, generate invoices as PDF files, and track all transactions in one place.

---

## ✨ Features

- ✅ Add and manage products (name, quantity, price)
- ✅ Generate PDF invoices dynamically
- ✅ View all invoices
- ✅ Real-time backend using Express.js and MongoDB
- ✅ Responsive UI built with React and Bootstrap

---

## 🚀 Tech Stack

**Frontend**
- React.js
- Bootstrap
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB & Mongoose
- PDFKit (for invoice generation)

---

## 📁 Folder Structure
biztrack-pro/
├── print-structure.js
├── package.json
├── package-lock.json
├── public/
│ └── manifest.json
├── src/
│ ├── App.js
│ ├── App.test.js
│ ├── index.js
│ ├── reportWebVitals.js
│ ├── setupTests.js
│ └── components/
│ ├── AllInvoices.js
│ ├── GenerateInvoice.js
│ ├── InvoiceList.js
│ └── Navbar.js
├── server/
│ ├── index.js
│ ├── package.json
│ ├── package-lock.json
│ ├── controllers/
│ │ └── productController.js
│ ├── models/
│ │ └── Product.js
│ └── routes/
│ └── productRoutes.js


---

## 💻 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/biztrack-pro.git
cd biztrack-pro

Install Frontend Dependencies
cd client
npm install

Install Backend Dependencies
cd ../server
npm install

Start the Backend Server
cd server
npm run dev

Start the Frontend React App
cd ../client
npm start

Author
Rakshita Rajan
GitHub

📜 License
This project is open-source and free to use.


