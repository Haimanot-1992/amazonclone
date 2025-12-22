import React from "react";
import { Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./SingleProduct.module.css";

const SingleProduct = ({ product }) => {
  const {
    id,
    name,
    price,
    originalPrice,
    rating,
    reviewCount,
    image,
    isPrime,
    discount,
  } = product;

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${id}`} className={styles.productLink}>
        <div className={styles.productImageContainer}>
          <img src={image} alt={name} className={styles.productImage} />
          {discount && (
            <span className={styles.discountBadge}>Save {discount}%</span>
          )}
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{name}</h3>

          <div className={styles.productRating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(rating) ? "#FFA41C" : "#DDD"}
                  color="#FFA41C"
                />
              ))}
            </div>
            <span className={styles.ratingNumber}>{rating}</span>
            <span className={styles.reviewCount}>({reviewCount})</span>
          </div>

          <div className={styles.productPrice}>
            <span className={styles.currentPrice}>${price.toFixed(2)}</span>
            {originalPrice && (
              <span className={styles.originalPrice}>
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {isPrime && (
            <div className={styles.primeInfo}>
              <Truck size={16} />
              <span>Prime</span>
            </div>
          )}
        </div>
      </Link>

      <button className={styles.addToCartButton}>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
