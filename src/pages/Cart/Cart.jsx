import React, { useContext } from "react";
import LayOut from "../../Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/product/productCard";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
import { RiArrowDownWideFill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <div>
      <LayOut>
        <section className={styles.container}>
          <div className={styles.cart_container}>
            <h2>Hello</h2>
            <h3>Your shoping basket</h3>
            <hr />
            {basket?.length == 0 ? (
              <p>Opps | No Item in your cart</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <section className={styles.card_product}>
                    <ProductCard
                      key={i}
                      product={item}
                      renderDesc={true}
                      renderAdd={false}
                      flex={true}
                    />
                    <div className={styles.btn_container}>
                      <button
                        className={styles.btn}
                        onClick={() => increment(item)}
                      >
                        <IoIosArrowUp size={20} />
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={styles.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <RiArrowDownWideFill size={20} />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>
          {basket?.length !== 0 && (
            <div className={styles.subtotal}>
              <div>
                <p>Subtotal({basket?.length}items)</p>
                <CurrencyFormat amount={total} />
                <span>
                  <input type="checkbox" />
                  <small>This order contains a gift</small>
                </span>
                <Link to="/payment">Continue to checkout</Link>
              </div>
            </div>
          )}
        </section>
      </LayOut>
    </div>
  );
}

export default Cart;
