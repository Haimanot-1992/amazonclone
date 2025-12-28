import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import Order from "./pages/Orders/Order";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
import Landing from "./pages/Landing/Landing";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Results from "./pages/Results/Results";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryName" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default Routing;
