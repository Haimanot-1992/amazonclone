import React, { useState } from "react";
import { CreditCard, Lock, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./CartPage3.module.css";

const CartPage3 = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [saveCard, setSaveCard] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const paymentMethods = [
    {
      id: "card",
      name: "Credit or Debit Card",
      icon: "💳",
      cards: ["Visa", "Mastercard", "American Express", "Discover"],
    },
    {
      id: "amazon",
      name: "Amazon Pay",
      icon: "🛒",
      description: "Pay using your Amazon balance",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: "🏦",
      description: "Pay with your PayPal account",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed");
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  return (
    <div className={styles.paymentPage}>
      <Header />

      <div className={styles.paymentContainer}>
        <div className={styles.checkoutSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepInfo}>
              <div className={styles.stepTitle}>Cart</div>
              <div className={styles.stepSubtitle}>Items selected</div>
            </div>
          </div>

          <div className={styles.stepDivider}></div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepInfo}>
              <div className={styles.stepTitle}>Shipping</div>
              <div className={styles.stepSubtitle}>Address selected</div>
            </div>
          </div>

          <div className={styles.stepDivider}></div>

          <div className={styles.step}>
            <div className={`${styles.stepNumber} ${styles.active}`}>3</div>
            <div className={styles.stepInfo}>
              <div className={styles.stepTitle}>Payment</div>
              <div className={styles.stepSubtitle}>Choose payment method</div>
            </div>
          </div>
        </div>

        <div className={styles.paymentLayout}>
          {/* Payment Form */}
          <div className={styles.paymentForm}>
            <h2 className={styles.sectionTitle}>Select a payment method</h2>

            <div className={styles.paymentMethods}>
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`${styles.paymentMethod} ${
                    selectedPayment === method.id ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <div className={styles.methodHeader}>
                    <input
                      type="radio"
                      name="payment"
                      checked={selectedPayment === method.id}
                      onChange={() => setSelectedPayment(method.id)}
                      className={styles.methodRadio}
                    />
                    <span className={styles.methodIcon}>{method.icon}</span>
                    <div className={styles.methodInfo}>
                      <div className={styles.methodName}>{method.name}</div>
                      {method.cards && (
                        <div className={styles.methodCards}>
                          {method.cards.join(", ")}
                        </div>
                      )}
                      {method.description && (
                        <div className={styles.methodDescription}>
                          {method.description}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Credit Card Form */}
            {selectedPayment === "card" && (
              <form className={styles.cardForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="cardNumber">Card number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cardName">Name on card</label>
                  <input
                    type="text"
                    id="cardName"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="John Doe"
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="expiryDate">Expiration date (MM/YY)</label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                      maxLength="5"
                      className={styles.formInput}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      maxLength="4"
                      className={styles.formInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.saveCard}>
                  <input
                    type="checkbox"
                    id="saveCard"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                    className={styles.saveCheckbox}
                  />
                  <label htmlFor="saveCard">
                    <Check size={14} />
                    Save my card for future purchases
                  </label>
                </div>

                <div className={styles.securityNote}>
                  <Lock size={16} />
                  <span>Your payment details are secure and encrypted</span>
                </div>
              </form>
            )}

            {/* Billing Address */}
            <div className={styles.billingAddress}>
              <h3 className={styles.billingTitle}>Billing address</h3>
              <div className={styles.billingInfo}>
                <div className={styles.billingName}>John Doe</div>
                <div className={styles.billingDetails}>
                  123 Main Street, New York, NY 10001
                </div>
                <div className={styles.billingPhone}>Phone: (123) 456-7890</div>
              </div>
              <button className={styles.changeButton}>Change</button>
            </div>

            {/* Place Order */}
            <div className={styles.placeOrder}>
              <button
                type="submit"
                className={styles.orderButton}
                onClick={handleSubmit}
              >
                Place your order
              </button>
              <div className={styles.orderNote}>
                By placing your order, you agree to Amazon's Conditions of Use
                and Privacy Notice.
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className={styles.orderSummary}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>

              <div className={styles.summaryItems}>
                <div className={styles.summaryItem}>
                  <span>Items (3):</span>
                  <span>$1,749.97</span>
                </div>
                <div className={styles.summaryItem}>
                  <span>Shipping & handling:</span>
                  <span>FREE</span>
                </div>
                <div className={styles.summaryItem}>
                  <span>Total before tax:</span>
                  <span>$1,749.97</span>
                </div>
                <div className={styles.summaryItem}>
                  <span>Estimated tax:</span>
                  <span>$140.00</span>
                </div>
              </div>

              <div className={styles.orderTotal}>
                <span>Order total:</span>
                <span className={styles.totalAmount}>$1,889.97</span>
              </div>

              <div className={styles.guarantee}>
                <CreditCard size={20} />
                <div>
                  <strong>Shop with confidence</strong>
                  <p>Amazon's Money Back Guarantee</p>
                </div>
              </div>
            </div>

            <div className={styles.returnPolicy}>
              <h4>Return policy</h4>
              <p>
                You may return most new, unopened items sold by Amazon within 30
                days of delivery for a full refund.
              </p>
              <Link to="/returns" className={styles.returnLink}>
                Learn more
              </Link>
            </div>

            <div className={styles.needHelp}>
              <h4>Need help?</h4>
              <Link to="/help" className={styles.helpLink}>
                Visit the Help Center
              </Link>
              <Link to="/contact" className={styles.helpLink}>
                Contact Customer Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage3;
