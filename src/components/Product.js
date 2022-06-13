import React, { useEffect } from 'react';
import styles from "./Product.module.css";
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import tvkd from 'tieng-viet-khong-dau';

const Product = ({ product }) => {
	// format currency
	const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price);

	return (
		<LazyLoad className={styles.Container} offset={100} once>
			{/* <div className={styles.Container}> */}
			<Link to={`/san-pham/${product.id}/${tvkd.cFriendlyURI(product.title)}`}>
				<img className={styles.Image} alt={product.title} src={product.image} />
			</Link>

			<h1 className={styles.title}>{product.title}</h1>
			{/* <p className={styles.desc}>{product.desc}</p> */}
			<span className={styles.price}>{formattedPrice}</span>
			{/* </div> */}
		</LazyLoad>
	)
}

export default Product
