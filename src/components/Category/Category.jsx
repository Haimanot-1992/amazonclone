import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
import { Categories } from "./Categories";
import CategoryCard from "./CategoryCard";
const Category = () => {
  return (
    <section className={styles.category_container}>
      {Categories.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
};

export default Category;
