import React, { useState, useEffect, useCallback } from 'react';
import styles from './CartPage.module.css';
import ls from 'local-storage';
import axios from 'axios';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NoProductFound from '../components/NoProductFound';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import SummaryTable from '../components/SummaryTable';

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

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

export default function CartPage() {
    const [cartList, setCartList] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [clientSecret, setClientSecret] = useState("");

    const userId = ls.get("userId");
    const accessToken = ls.get("accessToken");

    async function fetchData() {
        const getCartItemsResponse = await axios.get(
            process.env.REACT_APP_API_URL + `/carts/cartItems/${userId}`,
            { headers: { 'Authorization': 'Bearer ' + accessToken } });
        setCartList(getCartItemsResponse.data);

        let total = 0;
        for (let i = 0; i < getCartItemsResponse.data.length; i++) {
            total += Number(getCartItemsResponse.data[i].price * getCartItemsResponse.data[i].quantity)
        }

        const createPaymentIntentResponse = await axios.post(
            process.env.REACT_APP_API_URL + `/orders/create-payment-intent`,
            {
                userId: userId,
                items: getCartItemsResponse.data.map(cartItem => {
                    return {
                        productId: cartItem.id,
                        quantity: cartItem.quantity
                    }
                }),
                totalCost: total + total / 10,
                VATFee: total / 10,
                createdAt: new Date().toISOString()
            },
            {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });

        setClientSecret(createPaymentIntentResponse.data.clientSecret);
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

    const options = {
        clientSecret,
    };

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
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <SummaryTable subTotal={subTotal} grandTotal={grandTotal} cartList={cartList} setCartList={setCartList} />
                    </Elements>
                )}

            </div>
            <Footer />
        </div>
    );
}