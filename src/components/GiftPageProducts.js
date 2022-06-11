import React, { useEffect, useState } from 'react'
import { GiftProducts } from '../data'
import Product from "./Product"
import styles from "./GiftPageProducts.module.css"
import axios from 'axios';

const GiftPageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(process.env.REACT_APP_API_URL + "/products", { params: { group: "Quà tặng" } });
      setProducts(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.Title}>CÁC SẢN PHẨM QUÀ TẶNG</div>
      <div className={styles.Container}>
      {products.map((product) => (
					<Product product={product} key={product.id} />
				))}
      </div>
    </>
  )
}

export default GiftPageProducts
