import React, { useEffect } from 'react';
import styles from "./Product.module.css";
import LazyLoad from 'react-lazyload';

const Product = ({ product }) => {
	// format currency
	const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price);

	return (
		<LazyLoad className={styles.Container} offset={100} once>
			{/* <div className={styles.Container}> */}
			<img className={styles.Image} alt={product.title} src={product.image} />
			<h1 className={styles.title}>{product.title}</h1>
			{/* <p className={styles.desc}>{product.desc}</p> */}
			<span className={styles.price}>{formattedPrice}</span>
			{/* </div> */}
		</LazyLoad>
	)
}

export default Product
