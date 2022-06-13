import React, { useState, useEffect, useCallback } from 'react';
import styles from './LikePage.module.css'
import ls from 'local-storage';
import axios from 'axios';
import LikeItem from '../components/LikeItem'
import Header from '../components/Header';
import Footer from '../components/Footer';
import NoProductFound from '../components/NoProductFound';

export default function LikePage() {
	const [likeList, setLikeList] = useState([]);

	const userId = ls.get("userId");
	const accessToken = ls.get("accessToken");

	async function fetchData() {
		const response = await axios.get(
			process.env.REACT_APP_API_URL + `/users/likedProducts/${userId}`,
			{ headers: { 'Authorization': 'Bearer ' + accessToken } });
		setLikeList(response.data);
	}

	useEffect(() => {
		if (userId !== undefined) {
			fetchData();
		}
	}, []);

	// const onDeleteButtonClick = () => {
	//   const response = axios({
	//     method: 'put',
	//     url: process.env.REACT_APP_API_URL + `/users/removeAllLikedProduct/${userId}`,
	//     headers: { 'Authorization': 'Bearer ' + accessToken }
	//   }).then(fetchData())
	// }

	// const onAddButtonClick = () => { }

	const handleItem = useCallback(() => {
		fetchData();
	})

	return (
		<>
			<Header />
			<div className={styles.like_container}>
				<div className={styles.like_header}>
					<ul>
						<li>Trang chủ</li>
						<li>Danh sách yêu thích</li>
					</ul>
					<h1>Danh sách yêu thích</h1>
				</div>

				<div className={styles.like_body}>
					<table className={styles.like_detail} cellPadding="5" cellSpacing="0" >
						<thead>
							<tr>
								<th></th>
								<th>Ảnh</th>
								<th>Tên sản phẩm</th>
								<th>Giá</th>
								<th>Ngày thêm</th>
								<th>Tình trạng</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{
								likeList?.map(item =>
									<LikeItem key={item.id} id={item.id} image={item.image} name={item.title} price={item.price}
										avail={item.stock > 0} onItem={handleItem} />
								)
							}
						</tbody>
					</table>
					{(likeList.length === 0) && <NoProductFound />}
				</div>
			</div>
			<Footer />
		</>
	)
}