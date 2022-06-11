import React, { useState, useEffect } from 'react'
import Product from "./Product"
import styles from "./Products.module.css"
import axios from 'axios';

const HomePageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(process.env.REACT_APP_API_URL + "/products", { params: { sortMode: "mostPopular", limit: 20 } });
      setProducts(response.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.Container}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  )
}

export default HomePageProducts
