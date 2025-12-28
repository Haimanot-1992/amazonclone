import React from "react";
import Routing from "./Router";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Category from "./components/Category/Category";
// import Carousel from "./components/Carousel/CarouselEffect";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Product from "./components/product/Product";
// import ProductDetail from "./components/ProductDetail/ProductDetail";
// import SingleProduct from "./components/SingleProduct/SingleProduct";
// import CartPage1 from "./pages/CartPage1";
// import CartPage2 from "./pages/CartPage2";
// import CartPage3 from "./pages/CartPage3";
import "./App.css";
function App() {
  // const sampleProduct = {
  //   id: 1,
  //   name: "Apple iPhone 14 Pro Max (256GB) - Deep Purple",
  //   price: 1199.99,
  //   originalPrice: 1299.99,
  //   rating: 4.7,
  //   reviewCount: 2456,
  //   image:
  //     "https://images.unsplash.com/photo-1675860186423-5e23e4c6d0c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  //   isPrime: true,
  //   discount: 8,
  // };

  return (
    <Routing />
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <>
    //             <Header />
    //             <Carousel />
    //             <Category />
    //             <Product />
    //             <div
    //               style={{
    //                 padding: "20px",
    //                 maxWidth: "1400px",
    //                 margin: "0 auto",
    //               }}
    //             >
    //               <h2>Today's Deals</h2>
    //               <div
    //                 style={{
    //                   display: "grid",
    //                   gridTemplateColumns:
    //                     "repeat(auto-fill, minmax(250px, 1fr))",
    //                   gap: "20px",
    //                   marginTop: "20px",
    //                 }}
    //               >
    //                 <SingleProduct product={sampleProduct} />
    //                 <SingleProduct
    //                   product={{
    //                     ...sampleProduct,
    //                     id: 2,
    //                     name: "Sony WH-1000XM5 Headphones",
    //                     price: 399.99,
    //                   }}
    //                 />
    //                 <SingleProduct
    //                   product={{
    //                     ...sampleProduct,
    //                     id: 3,
    //                     name: "Kindle Paperwhite 11th Gen",
    //                     price: 149.99,
    //                   }}
    //                 />
    //                 <SingleProduct
    //                   product={{
    //                     ...sampleProduct,
    //                     id: 4,
    //                     name: "Apple Watch Series 8",
    //                     price: 399.99,
    //                   }}
    //                 />
    //               </div>
    //             </div>
    //           </>
    //         }
    //       />
    //       <Route path="/product/:id" element={<ProductDetail />} />
    //       <Route path="/cart" element={<CartPage1 />} />
    //       <Route path="/cart/shipping" element={<CartPage2 />} />
    //       <Route path="/cart/payment" element={<CartPage3 />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
