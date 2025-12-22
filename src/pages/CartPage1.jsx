import React, { useState } from "react";
import { Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./CartPage1.module.css";

const CartPage1 = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max (256GB) - Deep Purple",
      price: 1199.99,
      image:
        "https://images.unsplash.com/photo-1675860186423-5e23e4c6d0c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      quantity: 1,
      inStock: true,
      prime: true,
    },
    {
      id: 2,
      name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      price: 399.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      quantity: 2,
      inStock: true,
      prime: true,
    },
    {
      id: 3,
      name: 'Kindle Paperwhite (8 GB) – Now with a 6.8" display',
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      quantity: 1,
      inStock: true,
      prime: true,
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping for Prime
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.cartPage}>
      <Header />

      <div className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>Shopping Cart</h1>

        <div className={styles.cartLayout}>
          {/* Cart Items */}
          <div className={styles.cartItems}>
            <div className={styles.cartHeader}>
              <span className={styles.cartHeaderText}>
                Cart ({cartItems.length} items)
              </span>
              <button className={styles.deselectAll}>Deselect all items</button>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemSelect}>
                  <input type="checkbox" defaultChecked />
                </div>

                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>

                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <div className={styles.itemPrice}>
                    ${item.price.toFixed(2)}
                  </div>

                  {item.inStock ? (
                    <div className={styles.inStock}>In Stock</div>
                  ) : (
                    <div className={styles.outOfStock}>Out of Stock</div>
                  )}

                  {item.prime && (
                    <div className={styles.primeEligible}>
                      <img
                        src="/images/prime-logo.png"
                        alt="Prime"
                        className={styles.primeLogo}
                      />
                      <span>FREE delivery</span>
                    </div>
                  )}

                  <div className={styles.itemActions}>
                    <div className={styles.quantitySelector}>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className={styles.quantityButton}
                      >
                        <ChevronDown size={16} />
                      </button>
                      <span className={styles.quantityValue}>
                        Qty: {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className={styles.quantityButton}
                      >
                        <ChevronUp size={16} />
                      </button>
                    </div>

                    <div className={styles.actionButtons}>
                      <button className={styles.actionButton}>
                        Save for later
                      </button>
                      <button className={styles.actionButton}>
                        Compare with similar items
                      </button>
                      <button
                        className={styles.actionButton}
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.itemTotal}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            <div className={styles.cartSubtotal}>
              Subtotal ({cartItems.length} items):{" "}
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Order Summary */}
          <div className={styles.orderSummary}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>

              <div className={styles.summaryRow}>
                <span>Items:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Shipping & handling:</span>
                <span>
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className={styles.summaryRow}>
                <span>Total before tax:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Estimated tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className={styles.summaryTotal}>
                <span>Order total:</span>
                <span className={styles.totalAmount}>${total.toFixed(2)}</span>
              </div>

              <Link to="/cart/shipping" className={styles.checkoutButton}>
                Proceed to checkout
              </Link>

              <div className={styles.paymentMethods}>
                <img src="/images/visa.png" alt="Visa" />
                <img src="/images/mastercard.png" alt="Mastercard" />
                <img src="/images/amex.png" alt="American Express" />
                <img src="/images/discover.png" alt="Discover" />
              </div>
            </div>

            <div className={styles.primeCard}>
              <img
                src="/images/prime-logo.png"
                alt="Prime"
                className={styles.primeLogoLarge}
              />
              <p>Want FREE shipping? Try Amazon Prime FREE for 30 days</p>
              <button className={styles.primeButton}>Try Prime</button>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className={styles.recentlyViewed}>
          <h3>Recently viewed items</h3>
          <div className={styles.recentItems}>
            {/* Add recent items here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage1;
