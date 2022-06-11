import React from 'react'
import styles from './LikePage.module.css'
import ls from 'local-storage';
import axios from 'axios';
import  { useState, useEffect, useCallback } from 'react'
import LikeItem from '../components/LikeItem'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PublicTwoTone } from '@material-ui/icons';

const LikeData =
[
  {
    id: 1,
    image: "https://picsum.photos/175/120",
    title: "Đồng hồ Bạc 1",
    price: 765000,
    added_day: '20/04/2022',
    avail: true
  },

  {
    id: 2,
    image:"https://picsum.photos/175/120",
    title: "Đồng hồ Bạc 2",
    price: 765000,
    added_day: '19/04/2022',
    avail: false
  },

  {
    id: 3,
    image: "https://picsum.photos/175/120",
    title: "Đồng hồ Bạc 3",
    price: 765000,
    added_day: '18/04/2022',
    avail: true
  },

  {
    id: 4,
    image: "https://picsum.photos/175/120",
    title: "Đồng hồ Bạc 4",
    price: 765000,
    added_day: '18/04/2022',
    avail: true
  },

  {
    id: 5,
    image: "https://picsum.photos/175/120",
    title: "Đồng hồ Bạc 5",
    price: 765000,
    added_day: '18/04/2022',
    avail: true
  }
]

export default function LikePage() {
  const [likeList, setLikeList] = useState();
  const [likeItem, setLikeItem] = useState(0);

  const userId = ls.get("userId");
  const accessToken = ls.get("accessToken");

  async function fetchData() {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + `/users/likedProducts/${userId}`, 
      {headers: {'Authorization': 'Bearer ' + accessToken}});
    setLikeList(response.data);
  }

  useEffect(() => {
    if (userId !== undefined) {
      fetchData();
    }
    else {
      setLikeList(LikeData);
    }
	}, []);

  const onDeleteButtonClick = () => {
    const response = axios({
      method: 'put',
      url: process.env.REACT_APP_API_URL + `/users/removeAllLikedProduct/${userId}`, 
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(fetchData())
  }

  const onAddButtonClick = () => {}

  const handleItem = useCallback(() => {
    fetchData();
  })

  return (
    <>
      <div className={styles.like_container}>
          <Header />
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
          <div className={styles.div_btn}>
            <button id='delete-button' className={styles.delete_button} onClick={onDeleteButtonClick}>Bỏ tất cả sản phẩm khỏi Danh sách yêu thích</button>
            <button id='add-button' className={styles.add_button} onClick={onAddButtonClick}>Thêm tất cả sản phẩm vào Giỏ hàng</button>
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  )
}