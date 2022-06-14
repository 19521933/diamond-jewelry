import React, { useState } from "react";
import styles from "./LikeItem.module.css";
import ls from 'local-storage';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function LikeItem(props) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(props.price);

  const userId = ls.get("userId");
  const accessToken = ls.get("accessToken");

  const handleRemoveButtonClick = async () => {
    const result = await Swal.fire({
      title: 'Bạn có muốn xóa sản phẩm này khỏi danh sách yêu thích?',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: `Hủy`,
      confirmButtonColor: "#d33",
      padding: "2em"
    });
    if (result.isConfirmed) {
      const response = axios({
        method: 'put',
        url: process.env.REACT_APP_API_URL + `/users/removeLikedProduct/${userId}`,
        data: props.id,
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/text'
        }
      }).then(props.onItem);
    };
  }

  const handlePayButtonClick = async () => {
    const response = await axios({
      method: 'put',
      url: process.env.REACT_APP_API_URL + `/carts/addItem/${userId}`,
      data: { id: props.id, quantity: 1 },
      headers: { 'Authorization': 'Bearer ' + accessToken }
    });
    if (response.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Thành công',
        text: 'Sản phẩn đã được thêm vào giỏ hàng',
      });
    }
  };

  function Avail() {
    const isAvail = props.avail;
    if (isAvail == true) {
      return <td className={styles.avail}>Còn hàng</td>;
    }
    return <td className={styles.notavail}>Hết hàng</td>;
  }
  return (
    <>
      <tr className={styles.like_item}>
        <td>
          <button
            id="remove-button"
            onClick={handleRemoveButtonClick}
            className={styles.remove_button}
          >
            <i className="fa fa-trash-o mr-1" />
          </button>
        </td>
        <td>
          <img className={styles.product_image} src={props.image} alt={props.name} />
        </td>
        <td>{props.name}</td>
        <td className={styles.price}>{formattedPrice}</td>
        <Avail isAvail={props.avail} />
        <td>
          <button
            id="pay-button"
            onClick={handlePayButtonClick}
            className={styles.pay_button}
          >
            <i className="fa fa-shopping-basket mr-1" />
          </button>
        </td>
      </tr>
    </>
  );
}
