import React, { useEffect, useState } from "react";
import LayOut from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "./../../components/product/productCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [isloading, setloading] = useState(false);
  // console.log(productId);
  useEffect(() => {
    setloading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        isloading(false);
      });
  }, []);
  return (
    <div>
      <LayOut>
        {isloading ? (
          <Loader />
        ) : (
          <ProductCard
            product={product}
            flex={true}
            renderDesc={true}
            renderAdd={true}
          />
        )}
      </LayOut>
    </div>
  );
}

export default ProductDetail;
