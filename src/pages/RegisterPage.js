import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import ls from 'local-storage';
import styles from './RegisterPage.module.css';
import { ArrowLeft } from '@material-ui/icons';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function RegisterPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if (ls.get("accessToken")) {
            navigate("/");
        }
    }, []);

    async function handleFormSubmit(event) {
        try {
            event.preventDefault();
            const fullName = $("#name")[0].value;
            const dob = $("#dob")[0].value;
            const tel = $("#tel")[0].value;
            const email = $("#email")[0].value;
            const password = $("#password")[0].value;
            const role = "USER";
            const provider = "LOCAL";
            const response = await axios.post(process.env.REACT_APP_API_URL + "/auth/signup", { fullName, dob, tel, email, password, role, provider });
            console.log(response);

            if (response.status === 201) {
                showSuccessPopup();
            }
        } catch (error) {
            console.log(error.response.data);
            showErrorPopup(error.response.data);
        }
    }

    function hideSuccessPopup() {
        $("." + styles.success_popup)[0].classList.add(styles.hide);
    }

    function showSuccessPopup() {
        $("." + styles.success_popup)[0].classList.remove(styles.hide);
    }

    function hideErrorPopup() {
        $("." + styles.error_popup)[0].classList.add(styles.hide);
    }

    function showErrorPopup(errorMessage) {
        $("." + styles.error_popup)[0].classList.remove(styles.hide);
        $("." + styles.error_message)[0].textContent = errorMessage;
    }

    function onSuccess(response) {
        localStorage.setItem("accessToken", response.accessToken);
        navigate("/");
    }

    function onFailure(response) {
        console.log(response);
    }

    function validatePhoneNumber() {
        const input = $("input[type='tel']")[0];
        if (!input.value.match(/0(3|5|7|8|9)+([0-9]{8})\b/g)) {
            input.setCustomValidity('Số điện thoại không hợp lệ.');
        }
        else {
            input.setCustomValidity('');
        }
    }

    function validateEmail() {
        const input = $("input[type='email']")[0];
        if (!input.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
            input.setCustomValidity('Email không hợp lệ.');
        }
        else {
            input.setCustomValidity('');
        }
    }

    function validatePassword() {
        const input = $("input[type='password']")[0];
        if (!input.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g)) {
            input.setCustomValidity('Mật khẩu phải có ít nhất 6 kí tự và bao gồm: chữ thường, chữ hoa, số.');
        }
        else {
            input.setCustomValidity('');
        }

        validateConfirmPassword();
    }

    function validateConfirmPassword() {
        const password = $("input[type='password']")[0];
        const confirmPassword = $("input[type='password']")[1];
        if (password.value === confirmPassword.value) {
            confirmPassword.setCustomValidity('');
        }
        else {
            confirmPassword.setCustomValidity('Mật khẩu và mật khẩu xác nhập phải trùng nhau.');
        }
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.success_popup} ${styles.hide}`}>
                <p className={styles.success_button}>Đăng kí thành công.</p>
                <Link className={styles.login_button} to="/dang-nhap">
                    <button>Đăng nhập</button>
                </Link>
                <button className={styles.close_button} onClick={hideSuccessPopup}>
                    X
                </button>
            </div>
            <div className={`${styles.error_popup} ${styles.hide}`}>
                <p className={styles.notice_error}>Đăng kí thất bại.</p>
                <p className={styles.error_message}></p>
                <button className={styles.close_button} onClick={hideErrorPopup}>
                    X
                </button>
            </div>
            <Link className={styles.back_button} to="/dang-nhap">
                <ArrowLeft fontSize="large"></ArrowLeft>
            </Link>
            <div className={styles.wrapper}>
                <form onSubmit={handleFormSubmit}>
                    <h1>Đăng kí tài khoản</h1>
                    <input id='name' type='text' placeholder='Họ và tên' required />
                    <input id='dob' type='date' placeholder='Ngày tháng năm sinh' required />
                    <input id='tel' type='tel' placeholder='Số điện thoại' pattern='0(3|5|7|8|9)+([0-9]{8})\b'
                        onChange={validatePhoneNumber} required />
                    <input id='email' type='email' placeholder='Email' pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                        onChange={validateEmail} required />
                    <input id='password' type='password' placeholder='Mật khẩu' onChange={validatePassword} pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'
                        required />
                    <input id='confirmPassword' type='password' placeholder='Xác nhận mật khẩu' onChange={validateConfirmPassword} required />

                    <button className={styles.signup_button} type="submit">Đăng kí</button>
                </form>
            </div>
            <div className={styles.banner}>
            </div>
        </div>
    );
}
