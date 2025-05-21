import React, { useState } from "react";
import { ProductList } from "../../Utils/ProductList";
import styles from "./Products.module.css";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(ProductList.length / 10);

  const starting = (currentPage - 1) * 10;
  const pages = ProductList.slice(starting, starting + 10);

  const paginationfun = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  return (
    <>
      <div className={styles.Product}>
        {pages.map((val, i) => (
          <div key={val.id} className={styles.products}>
            <img src={val.products_image} alt="img" />
            <div>{val.product_name}</div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>

        <button onClick={() => setCurrentPage(currentPage>1?currentPage- 1: null)}>prev</button>

        {[...Array(totalPages)].map((val, i) => (
          <div
            onClick={() => paginationfun(i + 1)}
            className={`${styles.pagenumbers} ${
              currentPage === i + 1 ? styles.numbers : ""
            }`}
          >
            {i + 1}
          </div>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)}>next</button>
      </div>
    </>
  );
}
