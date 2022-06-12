import React, { useState, useEffect } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Comments from '../components/Comments'
import styles from "./ProductPage.module.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import '../components/comment.css';

const ProductPage = () => {
	const [quantity, setQuantity] = useState(1);
	const { productId } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(process.env.REACT_APP_API_URL + "/products/" + productId);
			if (response.status === 200) {
				// format currency
				const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(response.data.price);

				$("#productImage")[0].src = response.data.image;
				$("#productTitle")[0].textContent = response.data.title;
				$("#productDescription")[0].textContent = response.data.description;
				$("#productPrice")[0].textContent = formattedPrice;
			}
		}
		fetchData();
	}, [productId]);

	function increaseQuantity() {
		setQuantity(preValue => preValue + 1);
	}

	function decreaseQuantity() {
		if (quantity > 0) {
			setQuantity(preValue => preValue - 1);
		}
	}

	function handleChange(event) {
		const value = parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0;
		setQuantity(value);
	}

	return (
		<div className={styles.Container}>
			<Header />
			<Announcement />

			<div className={styles.WrapperContainer}>
				<div className={styles.Wrapper}>
					<div className={styles.ImgContainer}>
						<img id='productImage' className={styles.Image} alt="" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-1837makers-27-mm-square-watch-67460677_1003451_ED.jpg?fmt=webp"></img>
					</div>
					<div className={styles.InfoContainer}>
						<h1 id='productTitle' className={styles.Title}>Vine Ring</h1>
						<div className={styles.Detail}>Mô tả chi tiết:</div>
						<p id='productDescription' className={styles.Desc}>Nspired by nature, Tiffany Victoria captures the beauty of flowers and vines with a mix of expertly cut diamonds. This ring features a round tanzanite at its center and an organic vine motif of marquise diamonds. Creating color, light and movement, Tiffany Victoria designs are proof that more diamonds are always better.</p>
						<span id='productPrice' className={styles.Price}>$15.000</span>

						<div className={styles.AddContainer}>
							<div className={styles.quantity_wrapper}>
								<button className={styles.decrease_button} onClick={decreaseQuantity}>-</button>
								<input type="number" value={quantity} onChange={handleChange} />
								<button className={styles.increase_button} onClick={increaseQuantity}>+</button>
							</div>
							<button className={styles.Button}>THÊM VÀO GIỎ HÀNG</button>
						</div>
					</div>

				</div>

			</div>
			<Comments
			   commentsUrl="http://localhost:3004/comments"
			   currentUserId="1"
			 />
			<Newsletter />
			<Footer />
		</div>
	)
}

export default ProductPage
