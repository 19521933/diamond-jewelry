import React, { useEffect, useState } from 'react'
import Product from "./Product"
import styles from "./WatchPageProducts.module.css"
import axios from 'axios';

const WatchPageProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(process.env.REACT_APP_API_URL + "/products", { params: { group: "Đồng hồ" } });
			setProducts(response.data);
		}
		fetchData();
	}, []);

	return (
		<>
			<div className={styles.Title}>CÁC SẢN PHẨM ĐỒNG HỒ</div>
			<div className={styles.Container}>
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</>
	)
}

export default WatchPageProducts
