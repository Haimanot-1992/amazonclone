import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Layout/Layout";
import { db } from "../../Utility/firebase";
import styles from "./Order.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { style } from "@mui/system";
import ProductCard from "../../components/product/productCard";
function Order() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div>
      <LayOut>
        <section className={styles.container}>
          <div className={styles.order_container}>
            <h2>Your Orders</h2>
            {/* Ordered items  */}
            {orders?.length == 0 && (
              <div style={{ padding: "20px" }}> You dont have orders yet</div>
            )}
            <div>
              {orders?.map((eachOrder, i) => {
                return (
                  <div key={i}>
                    <hr />
                    <p>Order ID: {eachOrder?.id}</p>
                    {eachOrder?.data?.basket?.map((order) => {
                      return (
                        <ProductCard
                          flex={true}
                          product={order}
                          key={order.id}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </LayOut>
    </div>
  );
}

export default Order;
