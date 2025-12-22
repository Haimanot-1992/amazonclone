import React, { useState } from "react";
import { MapPin, Truck, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./CartPage2.module.css";

const CartPage2 = () => {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [selectedShipping, setSelectedShipping] = useState("free");

  const addresses = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "(123) 456-7890",
      isDefault: true,
    },
    {
      id: 2,
      name: "John Doe",
      address: "456 Oak Avenue",
      city: "Brooklyn",
      state: "NY",
      zip: "11201",
      phone: "(123) 456-7890",
      isDefault: false,
    },
  ];

  const shippingOptions = [
    {
      id: "free",
      name: "FREE Amazon Prime Shipping",
      delivery: "Tomorrow, Jan 10",
      price: 0,
      note: "FREE delivery",
    },
    {
      id: "standard",
      name: "Standard Shipping",
      delivery: "Jan 12 - Jan 16",
      price: 5.99,
      note: "",
    },
    {
      id: "express",
      name: "Express Shipping",
      delivery: "Tomorrow, Jan 10 by 10 AM",
      price: 12.99,
      note: "Fastest delivery option",
    },
  ];

  return (
    <div className={styles.shippingPage}>
      <Header />

      <div className={styles.shippingContainer}>
        <div className={styles.checkoutSteps}>
          <div className={styles.step}>
            <div className={`${styles.stepNumber} ${styles.active}`}>1</div>
            <div className={styles.stepInfo}>
              <div className={styles.stepTitle}>Cart</div>
              <Link to="/cart" className={styles.stepLink}>
                Edit
              </Link>
            </div>
          </div>

          <div className={styles.stepDivider}></div>

          <div className={styles.step}>
            <div className={`${styles.stepNumber} ${styles.active}`}>2</div>
            <div className={styles.stepInfo}>
              <div className={styles.stepTitle}>Shipping address</div>
              <div className={styles.stepSubtitle}>Select address</div>
            </div>
          </div>

          <div className={styles.stepDivider}></div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepInfo}>
              <div className={styles.stepTitle}>Payment method</div>
            </div>
          </div>
        </div>

        <div className={styles.shippingLayout}>
          {/* Shipping Form */}
          <div className={styles.shippingForm}>
            <h2 className={styles.sectionTitle}>Select a shipping address</h2>

            <div className={styles.addresses}>
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`${styles.addressCard} ${
                    selectedAddress === address.id ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedAddress(address.id)}
                >
                  <div className={styles.addressHeader}>
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddress === address.id}
                      onChange={() => setSelectedAddress(address.id)}
                      className={styles.addressRadio}
                    />
                    <div className={styles.addressInfo}>
                      <div className={styles.addressName}>{address.name}</div>
                      <div className={styles.addressDetails}>
                        {address.address}, {address.city}, {address.state}{" "}
                        {address.zip}
                      </div>
                      <div className={styles.addressPhone}>
                        Phone: {address.phone}
                      </div>
                    </div>
                  </div>

                  {address.isDefault && (
                    <div className={styles.defaultBadge}>
                      <Check size={12} />
                      Default
                    </div>
                  )}

                  <div className={styles.addressActions}>
                    <button className={styles.addressAction}>Edit</button>
                    <button className={styles.addressAction}>Remove</button>
                  </div>
                </div>
              ))}

              <button className={styles.addAddress}>
                <MapPin size={20} />
                Add new address
              </button>
            </div>

            <h2 className={styles.sectionTitle}>Choose a shipping option</h2>

            <div className={styles.shippingOptions}>
              {shippingOptions.map((option) => (
                <div
                  key={option.id}
                  className={`${styles.shippingOption} ${
                    selectedShipping === option.id ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedShipping(option.id)}
                >
                  <div className={styles.shippingHeader}>
                    <input
                      type="radio"
                      name="shipping"
                      checked={selectedShipping === option.id}
                      onChange={() => setSelectedShipping(option.id)}
                      className={styles.shippingRadio}
                    />
                    <div className={styles.shippingInfo}>
                      <div className={styles.shippingName}>{option.name}</div>
                      <div className={styles.shippingDelivery}>
                        {option.delivery}
                      </div>
                      {option.note && (
                        <div className={styles.shippingNote}>{option.note}</div>
                      )}
                    </div>
                  </div>
                  <div className={styles.shippingPrice}>
                    {option.price === 0
                      ? "FREE"
                      : `$${option.price.toFixed(2)}`}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.continueButton}>
              <Link to="/cart/payment" className={styles.continueLink}>
                Continue to payment
              </Link>
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
            </div>

            <div className={styles.giftCard}>
              <h4>Apply a gift card, promotion code, or voucher</h4>
              <input
                type="text"
                placeholder="Enter code"
                className={styles.giftInput}
              />
              <button className={styles.applyButton}>Apply</button>
            </div>

            <div className={styles.primeBenefits}>
              <div className={styles.primeBenefit}>
                <Truck size={20} />
                <div>
                  <strong>Free delivery on millions of items</strong>
                  <p>with Amazon Prime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage2;
