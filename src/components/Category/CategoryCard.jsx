import React from "react";
import Category from "./Category";
import styles from "./Category.module.css";
import { Categories } from "./Categories";
import { Link } from "react-router-dom";
function CategoryCard({ data }) {
  console.log(data.imgLink);
  return (
    <div className={styles.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>

        <img src={data?.imgLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
