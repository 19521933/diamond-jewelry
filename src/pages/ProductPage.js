import React, { useState, useEffect } from 'react'
import Announcement from '../components/Announcement'
import Product from "../components/Product"
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Comments from '../components/Comments'
import styles from "./ProductPage.module.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ls from 'local-storage';
import Swal from 'sweetalert2';
import '../components/comment.css';

const ProductPage = () => {
	const [quantity, setQuantity] = useState(1);
	const [product, setProduct] = useState();
	const { productId } = useParams();
	const [relatedProducts, setRelatedProducts] = useState([]);
	const [isLiked, setIsLiked] = useState(false);

	const userId = ls.get("userId");
    const accessToken = ls.get("accessToken");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(process.env.REACT_APP_API_URL + "/products/" + productId);
			if (response.status === 200) {
				// format currency
				const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(response.data.price);
				response.data.price = formattedPrice;
				setProduct(response.data);

				const response1 = await axios.get(
					process.env.REACT_APP_API_URL + "/products",
					{params: {
						group: response.data.group,
						brand: response.data.details.brand,
						limit: 4
					}}
				)
				setRelatedProducts(response1.data);
			}
		}
		fetchData();
	}, [productId]);

	useEffect(() => {
		async function fetchData() {
			if (userId !== null) {
				const response = await axios({
					method: 'get',
					url: process.env.REACT_APP_API_URL + `/users/existsLikedProduct/${userId}`,
					params: {
						productId: productId
					},
					headers: {
						'Authorization': 'Bearer ' + accessToken
					}
				})
				setIsLiked(response.data);
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

	const handleAddToCartButton = async () => {
		if (userId !== null) {
			const response = await axios({
				method: 'put',
				url: process.env.REACT_APP_API_URL + `/carts/addItem/${userId}`,
				data: {id: productId, quantity: quantity},
				headers: {'Authorization': 'Bearer ' + accessToken}
			});
			if (response.status === 200) {
				Swal.fire({
				icon: 'success',
				title: 'Thành công',
				text: 'Sản phẩm đã được thêm vào giỏ hàng',
				});
			}
		}
		else {
			Swal.fire({
				icon: 'info',
				title: 'Yêu cầu đăng nhập',
				text: 'Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng',
				});
		}
	}

	const handleLikeButton = async () => {
		if (userId !== null) {
			if (!isLiked) {
				const response = await axios({
					method: 'put',
					url: process.env.REACT_APP_API_URL + `/users/addLikedProduct/${userId}`,
					data: productId,
					headers: {
						'Authorization': 'Bearer ' + accessToken,
						'Content-Type': 'application/text'
					}
				});
				if (response.status === 200) {
					setIsLiked(true);
					Swal.fire({
						icon: 'success',
						title: 'Thành công',
						text: 'Sản phẩm đã được thêm vào danh sách yêu thích',
					});
				}
			}
		else {
			const response = await axios({
				method: 'put',
				url: process.env.REACT_APP_API_URL + `/users/removeLikedProduct/${userId}`,
				data: productId,
				headers: {
					'Authorization': 'Bearer ' + accessToken,
					'Content-Type': 'application/text'
				}
			});
				if (response.status === 200) {
					setIsLiked(false);
					Swal.fire({
						icon: 'success',
						title: 'Thành công',
						text: 'Sản phẩm đã được gỡ bỏ khỏi danh sách yêu thích',
					});
				}
			}
		}
		else {
			Swal.fire({
				icon: 'info',
				title: 'Yêu cầu đăng nhập',
				text: 'Bạn cần đăng nhập để thêm sản phẩm vào danh sách yêu thích',
			});
		}
	}

	let iconStyles = { color: "red", fontSize: "3em" };

	return (
		<div className={styles.Container}>
			<Header />
			<Announcement />

			<div className={styles.WrapperContainer}>
				<div className={styles.Wrapper}>
					<div className={styles.ImgContainer}>
						<img id='productImage' className={styles.Image} alt="" src={product ? product.image : ''}></img>
					</div>
					<div className={styles.InfoContainer}>
						<h1 id='productTitle' className={styles.Title}>{product ? product.title : ''}</h1>
						<div className={styles.Detail}>Mô tả chi tiết:</div>
						<p id='productDescription' className={styles.Desc}>{product ? product.description : ''}</p>
						<span id='productPrice' className={styles.Price}>{product ? product.price : ''}</span>
						<div className={styles.AddContainer}>
							<div className={styles.quantity_wrapper}>
								<button className={styles.decrease_button} onClick={decreaseQuantity}>-</button>
								<input type="number" value={quantity} onChange={handleChange} />
								<button className={styles.increase_button} onClick={increaseQuantity}>+</button>
							</div>
							<div onClick={handleLikeButton} className={styles.hearticon} >
								{isLiked ? 
								(<ion-icon name="heart" style={iconStyles}/>)
								: (<ion-icon name="heart-outline" style={iconStyles}/>)}
							</div>
							<button onClick={handleAddToCartButton} className={styles.Button}>THÊM VÀO GIỎ HÀNG</button>
						</div>
						<div className={styles.Detail}>Thông số sản phẩm:</div>
						{product && product.details.brand && <p id='productDescription' className={styles.Desc}>Thương hiệu: {product.details.brand}</p>}
						{product && product.details.material && <p id='productDescription' className={styles.Desc}>Chất liệu: {product.details.material}</p>}
						{product && product.details.chainMaterial && <p id='productDescription' className={styles.Desc}>Chất liệu dây: {product.details.chainMaterial}</p>}
						{product && product.details.type && <p id='productDescription' className={styles.Desc}>Loại trang sức: {product.details.type}</p>}
						{product && product.details.purity && <p id='productDescription' className={styles.Desc}>Độ tinh khiết: {product.details.purity}</p>}
						{product && product.details.gender && <p id='productDescription' className={styles.Desc}>Giới tính: {product.details.gender}</p>}
						{product && product.details.color && <p id='productDescription' className={styles.Desc}>Màu: {product.details.color}</p>}
					</div>
				</div>
			</div>
			<Comments key={productId} productId={productId}/>
			<div className={styles.RelatedTitle}>CÁC SẢN PHẨM LIÊN QUAN</div>
			<div className={styles.RelatedContainer}>
				{relatedProducts.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
			<Newsletter />
			<Footer />
		</div>
	)
}

export default ProductPage
