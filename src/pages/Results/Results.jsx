import React, { useEffect, useState } from "react";
import LayOut from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Result from "./Results";
import Product from "../../components/product/product";
import ProductCard from "../../components/product/productCard";
import styles from "./Results.module.css";
function Results() {
  const { categoryName } = useParams;
  const [Results, setResults] = useState([]);
  // console.log(categoryName);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        <div className={styles.product_container}>
          {Results?.map((Product) => (
            <ProductCard
              key={Product.id}
              product={Product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
