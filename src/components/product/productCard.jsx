import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import numeral from "numeral";
import styles from "./product.module.css";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import LayOut from "../../Layout/Layout";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../DataProvider/DataProvider";
function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const {
    image,
    title,
    id,
    rating = { rate: 0, count: 0 },
    price,
    description,
  } = product;
  const [state, dispatch] = useContext(DataContext);
  console.log(state);
  const addTocart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating: { rate: 0, count: 0 },
        price,
        description,
      },
    });
  };
  return (
    <div
      className={`${styles.card_container} ${
        flex ? styles.product_flexed : ""
      }`}
    >
      <Link to={`/Product/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "550px" }}>{description} </div>}
        <div className={styles.rating}>
          {/* rating*/}

          <Rating value={rating?.rate} precision={0.1} />
          {/* count  */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* prrice */}
          <CurrencyFormat amount={price} />
          {renderAdd && (
            <button className={styles.button} onClick={addTocart}>
              add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
