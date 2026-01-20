import React, { useState, useContext } from "react";
import LayOut from "../../Layout/Layout";
import styles from "./Payment.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/product/productCard";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "./../../CurrencyFormat/CurrencyFormat";
import { AxiosInstance, axiosInstance } from "../../Api/axios";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";
function Payment() {
  const navigate = useNavigate();
  const [{ user, basket }, dispatch] = useContext(DataContext);
  //total item
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  // price
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const Elements = useElements();
  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      // step 1. backend || function ---> contact to the client secret

      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      // step 2 client Side(react side confirmation)
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: Elements.getElement(CardElement),
        },
      });
      // console.log({ paymentIntent });
      // step 3. after the confirmation -->ordr firestore database save, clear basket
      await db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent?.id)
        .set({
          basket: basket,
          amount: paymentIntent?.amount,
          created: paymentIntent?.created,
        });
      navigate("/order", { state: { msg: "order New Payment" } });
      setProcessing(false);

      // empty the basket
      dispatch({ type: Type.EMPTY_BASKET });
    } catch (err) {
      console.log(err);
      setProcessing(false);
    }
  };

  return (
    <div>
      <LayOut>
        <div>
          {/* header  */}

          <div className={styles.Payment_Header}>
            checkout {totalItem} items
          </div>
          {/* payment methods  */}
          <section className={styles.payment}>
            {/* address  */}
            <div className={styles.flex}>
              <h3>Delivery Address</h3>
              <div>{user?.email}</div>
              <div> react lan</div>
              <div> Injibara</div>
            </div>
            <hr />

            {/* product  */}
            <div className={styles.flex}>
              <h3> Review items and Delivery</h3>

              <div>
                {basket?.map((item) => (
                  <ProductCard product={item} flex={true} />
                ))}
              </div>
            </div>
            <hr />
            {/* card form  */}
            <div className={styles.flex}>
              <h3>Payment methods</h3>
              <div className={styles.payment_card_container}>
                <div className={styles.payment_details}>
                  <form onSubmit={handlePayment}>
                    {/* error  */}
                    {cardError && (
                      <small style={{ color: "red" }}>{cardError}</small>
                    )}
                    {/* card element  */}
                    <CardElement onChange={handleChange} />
                    {/* price  */}
                    <div className={styles.payment_price}>
                      <div>
                        <span style={{ display: "flex" }}>
                          <p> Total Order |</p>
                          <CurrencyFormat amount={total} />
                        </span>
                      </div>
                      <button type="submit">
                        {processing ? (
                          <div className={styles.loading}>
                            <ClipLoader color="gray" size={12} />
                            <p>Please Wait ...</p>
                          </div>
                        ) : (
                          "Pay Now"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LayOut>
    </div>
  );
}

export default Payment;
