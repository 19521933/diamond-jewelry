import React, { useState, useEffect, useCallback } from 'react';
import styles from './CartPage.module.css';
import ls from 'local-storage';
import axios from 'axios';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NoProductFound from '../components/NoProductFound';
import Swal from 'sweetalert2';
const cartData =
    [
        {
            id: 1,
            image: "https://picsum.photos/175/120",
            title: "Đồng hồ Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            quantity: 1,
            total_cost: 765000
        },
        {
            id: 2,
            image: "https://picsum.photos/175/120",
            title: "Đồng hồ Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            quantity: 1,
            total_cost: 765000
        },
        {
            id: 3,
            image: "https://picsum.photos/175/120",
            title: "Đồng hồ Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            quantity: 1,
            total_cost: 765000
        },
        {
            id: 4,
            image: "https://picsum.photos/175/120",
            title: "Đồng hồ Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            quantity: 1,
            total_cost: 765000
        },
    ]

export default function CartPage() {
    const [cartList, setCartList] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    const userId = ls.get("userId");
    const accessToken = ls.get("accessToken");

    // format currency
    const formattedSubTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subTotal);
    const formattedVATFee = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subTotal / 10);
    const formattedGrandTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(grandTotal);

    async function fetchData() {
        const response = await axios.get(
            process.env.REACT_APP_API_URL + `/carts/cartItems/${userId}`,
            { headers: { 'Authorization': 'Bearer ' + accessToken } });
        setCartList(response.data);
    }

    useEffect(() => {
        if (userId !== undefined) {
            fetchData();
        }
        else {
            setCartList(cartData);
        }
    }, []);

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < cartList.length; i++) {
            total += Number(cartList[i].price * cartList[i].quantity)
        }
        setSubTotal(total);
        setGrandTotal(total + total / 10);
    }, [cartList])

    const handleUpdateQuantity = useCallback(() => {
        fetchData();
    })

    const handleSubmitOrder = async () => {
        if (cartList && cartList.length > 0) {
            const result = await Swal.fire({
                title: 'Bạn có xác nhận đơn hàng này không?',
                showCancelButton: true,
                confirmButtonText: 'Xác nhận',
                cancelButtonText: 'Hủy',
                confirmButtonColor: "#d33",
                padding: "2em"
            });
            if (result.isConfirmed) {
                const response = await axios({
                    method: 'post',
                    url: process.env.REACT_APP_API_URL + `/orders`,
                    data: {
                        userId: userId,
                        items: cartList.map(cartItem => {
                            return {
                                id: cartItem.id,
                                quantity: cartItem.quantity
                            }
                        }),
                        totalCost: grandTotal,
                        VATFee: grandTotal - subTotal
                    },
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: `Bạn đã xác nhận đơn hàng thành công. 
                    Mã đơn hàng: ${response.data.id}, 
                    Tạo vào lúc: ${response.data.createdAt}, 
                    Địa chỉ nhận hàng: ${response.data.address}`
                });
            }
        }
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.cart_header}>
                <ul>
                    <li>Trang chủ</li>
                    <li>Giỏ hàng</li>
                </ul>
                <h1>GIỎ HÀNG</h1>
            </div>
            <div className={styles.cart_body}>
                <table className={styles.cart_detail} cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ẢNH</th>
                            <th style={{ textAlign: 'left' }}>TÊN SẢN PHẨM</th>
                            <th>GIÁ BÁN</th>
                            <th>SỐ LƯỢNG</th>
                            <th>TỔNG TIỀN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList?.map(item =>
                                <CartItem key={item.id} id={item.id} image={item.image} name={item.title} price={item.price}
                                    quantity={item.quantity} total_cost={item.quantity * item.price} onUpdateQuantity={handleUpdateQuantity}></CartItem>
                            )
                        }
                    </tbody>
                </table>
                {(cartList.length === 0) && <NoProductFound />}

                <table className={styles.summary} cellSpacing="20 50" cellPadding="0">
                    <thead>
                        <tr>
                            <th colSpan={2}>BẢNG TÓM TẮT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tạm tính</td>
                            <td>{formattedSubTotal}</td>
                        </tr>
                        <tr>
                            <td>Thuế GTGT (10%)</td>
                            <td>{formattedVATFee}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td>Thành tiền</td>
                            <td>{formattedGrandTotal}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.center} colSpan={2}>
                                <button onClick={handleSubmitOrder}>Xác nhận đặt hàng</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}