import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DetailProduct from './components/DetailProduct';
import UpdateProduct from './components/UpdateProduct';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <div className="flex-grow-1">        
      <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/products/update/:id" element={<UpdateProduct />} />
          <Route path="/products/signup" element={<SignUp />} />
          <Route path="/products/login" element={<Login />} />
          <Route path="/products/newProduct" element={<AddProduct />} />
          <Route path='/products/id' element={<DetailProduct />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
