import { Link, useNavigate } from 'react-router-dom';
import localStorage from 'localStorage';
// import OAuth2Login from 'react-simple-oauth2-login';
import Navbar from '../components/Navbar';
import styles from './LoginPage.module.css';

export default function Login() {
    const navigate = useNavigate();

    function onSuccess(response) {
        localStorage.setItem("access_token", response.access_token);
        navigate("/");
    }

    function onFailure(response) {
        console.log(response);
    }

    return (
        <>
        <Navbar/>
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <form>
                <h1>Đăng nhập</h1>
                <input type='text' placeholder='Số điện thoại hoặc email' />
                <input type='password' placeholder='****************************************' />
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
    </>
    );
}
