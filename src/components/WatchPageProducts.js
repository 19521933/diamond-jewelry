import React, { useEffect, useState } from 'react'
import Product from "./Product"
import styles from "./WatchPageProducts.module.css"
import axios from 'axios';

const WatchPageProducts = ({filters}) => {
	const [products, setProducts] = useState();
	let params = {};
	params.group = "Đồng hồ";
	if (filters.brand !== undefined && filters.brand !== "Tất cả") { params.brand = filters.brand; }
	if (filters.material !== undefined  && filters.material !== "Tất cả") { params.material = filters.material; }
	if (filters.gender !== undefined  && filters.gender !== "Hiển thị tất cả") { params.gender = filters.gender; }
	if (filters.chainMaterial !== undefined  && filters.chainMaterial !== "Tất cả") { params.chainMaterial = filters.chainMaterial; }
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
			<div className={styles.Title}>CÁC SẢN PHẨM ĐỒNG HỒ</div>
			<div className={styles.Container}>
			{(products && products.length === 0) ? (<div className={styles.None}>Không có sản phẩm nào phù hợp</div>)  : (products?.map((product) => (
            	<Product product={product} key={product.id} />
          	)))}
			</div>
		</>
	)
}

export default WatchPageProducts
