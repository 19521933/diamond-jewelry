import { useState } from 'react';
import styles from './CartItem.module.css';
import ls from 'local-storage';
import axios from 'axios';

export default function CartItem(props) {
    const [ quantity, setQuantity ] = useState(props.quantity);
    const [ itemTotalCost, setItemTotalCost ] = useState(props.total_cost);

    const userId = ls.get("userId");
    const accessToken = ls.get("accessToken");

    // format currency
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price);
    const formattedTotalCost = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemTotalCost);

    function increaseQuantity() {
        setQuantity(preValue => preValue + 1);
        setItemTotalCost(props.price * (quantity + 1));

        updateItemQuantity(props.quantity + 1).then(props.onUpdateQuantity);
    }

    function decreaseQuantity() {
        if (quantity > 0) {
            setQuantity(preValue => preValue - 1);
            setItemTotalCost(props.price * (quantity - 1));

            updateItemQuantity(props.quantity - 1).then(props.onUpdateQuantity);
        }
    }

    function handleChange(event) {
        const value = parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0;
        setQuantity(value);
        setItemTotalCost(props.price * value);

        updateItemQuantity(value).then(props.onUpdateQuantity);
    }

    async function updateItemQuantity(quantity) {
        const response = await axios({
            method: 'put',
            url: process.env.REACT_APP_API_URL + `/carts/addItem/${userId}`,
            data: {id: props.id, quantity: quantity},
            headers: {'Authorization': 'Bearer ' + accessToken}
        });
    }

    const handleRemoveButtonClick = () => {
        const response = axios({
            method: 'put',
            url: process.env.REACT_APP_API_URL + `/carts/removeItem/${userId}`,
            data: props.id,
            headers: {
              'Authorization': 'Bearer ' + accessToken,
              'Content-Type': 'application/text'}
          }).then(props.onUpdateQuantity);
    }

    return (
        <>
            <tr className={props.wrapper}>
                <td>
                    <button onClick={handleRemoveButtonClick} className={styles.remove_button}>
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </td>
                <td>
                    <img src={props.image} alt={props.name} />
                </td>
                <td>{props.name}</td>
                <td className={styles.price}>{formattedPrice}</td>
                <td>
                    <div className={styles.quantity_wrapper}>
                        <button className={styles.decrease_button} onClick={decreaseQuantity}>-</button>
                        <input type="number" value={quantity} onChange={handleChange} />
                        <button className={styles.increase_button} onClick={increaseQuantity}>+</button>
                    </div>
                </td>
                <td>{formattedTotalCost}</td>
            </tr>
            <tr>
                <td colSpan={6}>
                    <hr />
                </td>
            </tr>
        </>
    );
}