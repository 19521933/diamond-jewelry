import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './CartItem.module.css';
import ls from 'local-storage';
import axios from 'axios';
import tvkd from 'tieng-viet-khong-dau'
import Swal from 'sweetalert2';

export default function CartItem(props) {
    const [quantity, setQuantity] = useState(props.quantity);
    const [itemTotalCost, setItemTotalCost] = useState(props.total_cost);

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
            data: { id: props.id, quantity: quantity },
            headers: { 'Authorization': 'Bearer ' + accessToken }
        });
    }

    const handleRemoveButtonClick = async () => {
        const result = await Swal.fire({
            title: 'Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: `Hủy`,
            confirmButtonColor: "#d33",
            padding: "2em"
        });
        if (result.isConfirmed) {
            const response = axios({
                method: 'put',
                url: process.env.REACT_APP_API_URL + `/carts/removeItem/${userId}`,
                data: props.id,
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/text'
                }
            }).then(props.onUpdateQuantity);

        }
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
                    <Link to={`/san-pham/${props.id}/${tvkd.cFriendlyURI(props.name)}`}>
                        <img className={styles.card_item_image} src={props.image} alt={props.name} />
                    </Link>
                </td>
                <td>
                    <Link className={styles.link} to={`/san-pham/${props.id}/${tvkd.cFriendlyURI(props.name)}`}>
                        {props.name}
                    </Link>
                </td>
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