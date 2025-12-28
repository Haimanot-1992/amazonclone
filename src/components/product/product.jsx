import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./product.module.css";
// import SingleProduct from "../SingleProduct/SingleProduct";
import ProductCard from "./productCard";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setproducts] = useState([]);
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
        // console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        isloading(false);
      });
  }, []);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <section className={styles.product_container}>
          {products.map((SingleProduct) => {
            return (
              <ProductCard
                product={SingleProduct}
                key={SingleProduct.id}
                renderAdd={true}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
