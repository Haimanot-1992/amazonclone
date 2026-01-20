import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Order from "./pages/Orders/Order";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
import Landing from "./pages/Landing/Landing";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Results from "./pages/Results/Results";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51SlKXOGc3ZhdtS8Pb4lbKUPBJyePw9o2ip4iJDqtTukWROhaoLdbQ7ojV0ArpEDBAuNOCREgtH7H38xW2HpCnmH500L7NDrk9O"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/order"
          element={
            <ProtectedRoute
              msg={"You must login to access your Orders"}
              redirect={"/order"}
            >
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute msg={"You must login to pay"} redirect={"/payment"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryName" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default Routing;
