import React, { useState } from "react";
import styles from "./LikeItem.module.css";
import ls from 'local-storage';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function LikeItem(props) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(props.price);

  const userId = ls.get("userId");
  const accessToken = ls.get("accessToken");

  const onRemoveButtonClick = () => {
    const response = axios({
      method: 'put',
      url: process.env.REACT_APP_API_URL + `/users/removeLikedProduct/${userId}`,
      data: props.id,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/text'}
    }).then(props.onItem)
  };

  const onPayButtonClick = () => {
    const response = axios({
      method: 'put',
      url: process.env.REACT_APP_API_URL + `/carts/addItem/${userId}`,
      data: {id: props.id, quantity: 1},
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(props.onItem)
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
            onClick={onRemoveButtonClick}
            className={styles.remove_button}
          >
            <i className="fa fa-trash-o mr-1" />
          </button>
        </td>
        <td>
          <img src={props.image} alt={props.name} />
        </td>
        <td>{props.name}</td>
        <td className={styles.price}>{formattedPrice}</td>
        <td> {props.added_day}</td>
        <Avail isAvail={props.avail} />
        <td>
          <button
            id="pay-button"
            onClick={onPayButtonClick}
            className={styles.pay_button}
          >
            <i className="fa fa-shopping-basket mr-1" />
          </button>
        </td>
      </tr>
    </>
  );
}
