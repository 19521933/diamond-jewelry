import React, { useEffect, useState } from 'react'
import styles from './SummaryTable.module.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import ls from 'local-storage';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

function SummaryTable({ subTotal, grandTotal, cartList, setCartList }) {
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    // format currency
    const formattedSubTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subTotal);
    const formattedVATFee = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subTotal / 10);
    const formattedGrandTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(grandTotal);
    const userId = ls.get("userId");
    const accessToken = ls.get("accessToken");

    const handleSubmitOrder = async () => {
        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://localhost:3000/gio-hang",
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
        // if (cartList && cartList.length > 0) {
        //     const result = await Swal.fire({
        //         title: 'Bạn có xác nhận đơn hàng này không?',
        //         showCancelButton: true,
        //         confirmButtonText: 'Xác nhận',
        //         cancelButtonText: 'Hủy',
        //         confirmButtonColor: "#46cfbe",
        //         padding: "2em"
        //     });
        //     if (result.isConfirmed) {
        //         const response = await axios({
        //             method: 'post',
        //             url: process.env.REACT_APP_API_URL + `/orders`,
        //             data: {
        //                 userId: userId,
        //                 items: cartList.map(cartItem => {
        //                     return {
        //                         productId: cartItem.id,
        //                         quantity: cartItem.quantity
        //                     }
        //                 }),
        //                 totalCost: grandTotal,
        //                 VATFee: grandTotal - subTotal,
        //                 createdAt: new Date().toISOString()
        //             },
        //             headers: {
        //                 'Authorization': 'Bearer ' + accessToken
        //             }
        //         });
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'Thành công',
        //             text: `Bạn đã xác nhận đơn hàng thành công. 
        //             Mã đơn hàng: ${response.data.id}, 
        //             Tạo vào lúc: ${response.data.createdAt}, 
        //             Địa chỉ nhận hàng: ${response.data.address}`
        //         });

        //         const clearItemsResposne = await axios.put(
        //             process.env.REACT_APP_API_URL + `/carts/removeAllItems/${userId}`,
        //             null,
        //             { headers: { 'Authorization': 'Bearer ' + accessToken } });
        //         setCartList(clearItemsResposne.data.items);
        //     }
        // }
    }

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công',
                        text: `Payment succeeded!`
                    });
                    break;
                case "processing":
                    Swal.fire({
                        icon: 'info',
                        title: 'Info',
                        text: `Your payment is processing.`
                    });
                    break;
                case "requires_payment_method":
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Your payment was not successful, please try again.`
                    });
                    break;
                default:
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Something went wrong.`
                    });
                    break;
            }
        });
    }, [stripe]);


    return (
        <table className={styles.summary}>
            <thead>
                <tr>
                    <th colSpan={2} style={{ paddingTop: '15px' }}><h5 style={{ marginBottom: '0', fontWeight: 'bold' }}>BẢNG TÓM TẮT</h5></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tạm tính</td>
                    <td>{formattedSubTotal}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid black' }}>
                    <td>Thuế GTGT (10%)</td>
                    <td>{formattedVATFee}</td>
                </tr>

                <tr style={{ borderBottom: '1px solid black' }}>
                    <td>Thành tiền</td>
                    <td>{formattedGrandTotal}</td>
                </tr>

                <tr>
                    <td style={{ padding: '10px' }} colSpan={2}><PaymentElement id="payment-element" /></td>
                </tr>

                <tr>
                    <td className={styles.center} colSpan={2}>
                        <button disabled={isLoading || !stripe || !elements} onClick={handleSubmitOrder}>Thanh toán</button>
                    </td>
                </tr>
                <tr>
                    <td className={styles.center} colSpan={2}>
                        {message && <div id="payment-message">{message}</div>}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default SummaryTable