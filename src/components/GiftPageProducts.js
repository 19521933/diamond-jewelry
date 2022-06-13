import React, { useEffect, useState } from 'react'
import Product from "./Product"
import styles from "./GiftPageProducts.module.css"
import axios from 'axios';
import NoProductFound from './NoProductFound';

const GiftPageProducts = ({filters}) => {
  const [products, setProducts] = useState([]);
  let params = {};
	params.group = "Quà tặng";
	if (filters.brand !== undefined && filters.brand !== "Tất cả") { params.brand = filters.brand; }
	if (filters.material !== undefined  && filters.material !== "Tất cả") { params.material = filters.material; }
  if (filters.chainMaterial !== undefined  && filters.chainMaterial !== "Tất cả") { params.chainMaterial = filters.chainMaterial; }
  if (filters.type !== undefined  && filters.type !== "Tất cả") { params.type = filters.type; }
	if (filters.gender !== undefined  && filters.gender !== "Hiển thị tất cả") { params.gender = filters.gender; }
	if (filters.color !== undefined  && filters.color !== "Tất cả") { params.color = filters.color; }
	if (filters.sortMode !== undefined) { params.sortMode = filters.sortMode; }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(process.env.REACT_APP_API_URL + "/products", { params: params });
      setProducts(response.data);
    }
    fetchData();
  }, [filters]);

  return (
    <>
      <div className={styles.Title}>CÁC SẢN PHẨM QUÀ TẶNG</div>
      <div className={styles.Container}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      {(products.length === 0) && <NoProductFound />}
    </>
  )
}

export default GiftPageProducts
