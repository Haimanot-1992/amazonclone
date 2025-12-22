import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

const Category = () => {
  const categories = [
    { id: 1, name: "Electronics", icon: "📱", color: "#FF6B6B" },
    { id: 2, name: "Fashion", icon: "👕", color: "#4ECDC4" },
    { id: 3, name: "Home", icon: "🏠", color: "#FFD166" },
    { id: 4, name: "Beauty", icon: "💄", color: "#06D6A0" },
    { id: 5, name: "Sports", icon: "⚽", color: "#118AB2" },
    { id: 6, name: "Books", icon: "📚", color: "#EF476F" },
    { id: 7, name: "Toys", icon: "🧸", color: "#073B4C" },
    { id: 8, name: "Grocery", icon: "🛒", color: "#7209B7" },
    { id: 9, name: "Health", icon: "💊", color: "#F72585" },
    { id: 10, name: "Automotive", icon: "🚗", color: "#3A86FF" },
  ];

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryHeader}>
        <h2 className={styles.categoryTitle}>Shop by Category</h2>
        <Link to="/" className={styles.seeAll}>
          See all
        </Link>
      </div>

      <div className={styles.categoryGrid}>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className={styles.categoryCard}
            style={{ "--category-color": category.color }}
          >
            <div className={styles.categoryIcon}>{category.icon}</div>
            <span className={styles.categoryName}>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
