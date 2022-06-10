import React from 'react';
import styles from "./Product.module.css";
import LazyLoad from 'react-lazyload';

const Product = ({ item }) => {
	return (
		<LazyLoad className={styles.Container} offset={100} once>
			{/* <div className={styles.Container}> */}
			<img className={styles.Image} alt={item.title} src={item.img} />
			<h1 className={styles.title}>{item.title}</h1>
			<p className={styles.desc}>{item.desc}</p>
			<span className={styles.price}>{item.price}</span>
			{/* </div> */}
		</LazyLoad>
	)
}

export default Product
