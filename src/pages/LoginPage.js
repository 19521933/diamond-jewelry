import { Link, useNavigate } from 'react-router-dom';
// import OAuth2Login from 'react-simple-oauth2-login';
import styles from './LoginPage.module.css';
import ls from 'local-storage';
import $ from 'jquery';
import axios from 'axios';
import { useEffect } from 'react';


export default function Login() {
	const navigate = useNavigate();

	useEffect(() => {
		if (ls.get("access_token")) {
			navigate("/");
		}
	}, []);


	function onSuccess(response) {
		localStorage.setItem("access_token", response.access_token);
		navigate("/");
	}

	function onFailure(response) {
		console.log(response);
	}

	async function handleFormSubmit(event) {
		try {
			event.preventDefault();
			const email = $("input[type='email']")[0].value;
			const password = $("input[type='password']")[0].value;
			const response = await axios.post(process.env.REACT_APP_API_URL + "/auth/signin/user", { email, password });

			if (response.status === 200) {
				const token = response.data;
				ls.set("access_token", token);
				navigate("/");
			}
		} catch (error) {
			$("." + styles.email_error_message)[0].textContent = error.response.data;
		}

	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<form onSubmit={handleFormSubmit}>
					<h1>Đăng nhập</h1>
					<input type='email' placeholder='Email' required pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" />
					<p className={styles.email_error_message}></p>
					<input type='password' placeholder='Mât khẩu' required />
					<p className='password_error_message'></p>
					<div className={styles.forgotpassword} to="/quen-mat-khau">Quên mật khẩu?</div>
					<br></br>
					<button className={styles.loginbutton} type="submit">Đăng nhập</button>
					<p className={styles.title}>
						Chưa có tài khoản?
						<Link className={styles.title} to="/dang-ki"> Đăng kí ngay</Link>
					</p>
					<div className={styles.thirdpartywrapper}>
						<div
							className={styles.button}
							responseType="token"
							redirectUri="http://localhost:3000/auth/google/diamonjewelry"
							scope="profile"
						>
							<img className={styles.icon} src={require("../assets/images/google.png")} alt="google-icon" />
						</div>
						<div
							className={styles.button}
							responseType="token"
							redirectUri="http://localhost:3000/auth/facebook/diamonjewelry"
							scope="public_profile"
						>
							<img className={styles.icon} src={require("../assets/images/facebook.png")} alt="facebook-icon" />
						</div>

						<div
							className={styles.button}
							responseType="token"
							redirectUri="http://localhost:3000/auth/facebook/diamonjewelry"
							scope="public_profile"
						>
							<img className={styles.icon} src={require("../assets/images/instagram.png")} alt="facebook-icon" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
