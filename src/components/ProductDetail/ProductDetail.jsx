import React, { useState } from "react";
import { Star, Truck, Shield, RotateCcw, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);

  const product = {
    id: 1,
    name: "Fjallraven- Foldstack No.1 Backpack,Fits 15 Laptops",
    price: 1099.99,
    originalPrice: 1199.99,
    rating: 4.7,
    reviewCount: 2456,
    description:
      "The iPhone 14 Pro Max features a stunning 6.7-inch Super Retina XDR display, A16 Bionic chip, and an advanced camera system for incredible photos and videos.",
    features: [
      "6.7-inch Super Retina XDR display",
      "A16 Bionic chip for incredible performance",
      "Pro camera system with 48MP Main camera",
      "Emergency SOS via satellite",
      "All-day battery life",
    ],
    images: [
      "https://images.unsplash.com/photo-1675860186423-5e23e4c6d0c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1663499482523-1c0c1eae1b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { id: 1, name: "Deep Purple", value: "#5D3A6F" },
      { id: 2, name: "Gold", value: "#FFD700" },
      { id: 3, name: "Silver", value: "#C0C0C0" },
      { id: 4, name: "Space Black", value: "#333333" },
    ],
    storage: [
      { id: 1, size: "128GB", price: 1099.99 },
      { id: 2, size: "256GB", price: 1199.99 },
      { id: 3, size: "512GB", price: 1399.99 },
      { id: 4, size: "1TB", price: 1599.99 },
    ],
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} item(s) to cart`);
  };

  const handleBuyNow = () => {
    console.log("Proceeding to checkout");
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>
          <ChevronLeft size={16} />
          Back to results
        </Link>
        <span>Electronics &gt; Phones &gt; Smartphones</span>
      </div>

      <div className={styles.detailContainer}>
        {/* Images */}
        <div className={styles.imageSection}>
          <div className={styles.thumbnails}>
            {product.images.map((img, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${
                  selectedImage === index ? styles.active : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
          <div className={styles.mainImage}>
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.infoSection}>
          <h1 className={styles.productTitle}>{product.name}</h1>

          <div className={styles.ratingSection}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < Math.floor(product.rating) ? "#FFA41C" : "#DDD"}
                  color="#FFA41C"
                />
              ))}
            </div>
            <span className={styles.ratingNumber}>{product.rating}</span>
            <Link to="/reviews" className={styles.reviewsLink}>
              {product.reviewCount} ratings
            </Link>
          </div>

          <div className={styles.priceSection}>
            <span className={styles.currentPrice}>
              ${product.price.toFixed(2)}
            </span>
            <span className={styles.originalPrice}>
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className={styles.discount}>
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          </div>

          <div className={styles.description}>
            <p>{product.description}</p>
          </div>

          {/* Features */}
          <div className={styles.features}>
            <h3>Key Features:</h3>
            <ul className={styles.featuresList}>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Color Selection */}
          <div className={styles.colorSection}>
            <h3>
              Color:{" "}
              <span className={styles.selectedColor}>
                {product.colors[selectedColor].name}
              </span>
            </h3>
            <div className={styles.colorOptions}>
              {product.colors.map((color, index) => (
                <button
                  key={color.id}
                  className={`${styles.colorOption} ${
                    selectedColor === index ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedColor(index)}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Storage Selection */}
          <div className={styles.storageSection}>
            <h3>Storage:</h3>
            <div className={styles.storageOptions}>
              {product.storage.map((storage, index) => (
                <button
                  key={storage.id}
                  className={`${styles.storageOption} ${
                    selectedStorage === index ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedStorage(index)}
                >
                  <div className={styles.storageSize}>{storage.size}</div>
                  <div className={styles.storagePrice}>
                    ${storage.price.toFixed(2)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className={styles.quantitySection}>
            <h3>Quantity:</h3>
            <div className={styles.quantityControls}>
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className={styles.quantityButton}
              >
                -
              </button>
              <span className={styles.quantityValue}>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className={styles.quantityButton}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className={styles.actionButtons}>
            <button className={styles.addToCart} onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className={styles.buyNow} onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className={styles.deliveryInfo}>
            <div className={styles.deliveryItem}>
              <Truck size={24} />
              <div>
                <strong>FREE delivery</strong>
                <p>Tomorrow, 9 AM - 5 PM</p>
              </div>
            </div>
            <div className={styles.deliveryItem}>
              <Shield size={24} />
              <div>
                <strong>Amazon's Choice</strong>
                <p>Highly rated and well-priced</p>
              </div>
            </div>
            <div className={styles.deliveryItem}>
              <RotateCcw size={24} />
              <div>
                <strong>Return Policy</strong>
                <p>Eligible for Return, Refund or Replacement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
