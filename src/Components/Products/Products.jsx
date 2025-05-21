import React from "react";
import ProductList from "../../Utils/ProductList";
import styles from "./Products.module.css";

export default function Products() {
  <div className={styles.Product}>
    1223
    {ProductList.map((val, i) => (
      <div key={val.id} className={styles.products}>
        <img src={val.products_image} alt="img" />
        <div>{val.product_name}</div>
      </div>
    ))}
  </div>;
}
