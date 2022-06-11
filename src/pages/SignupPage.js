import { Link, useNavigate } from "react-router-dom";
import localStorage from "localStorage";
import OAuth2Login from "react-simple-oauth2-login";
import styles from "./SignupPage.module.css";

export default function Login() {
  const navigate = useNavigate();

  function onSuccess(response) {
    localStorage.setItem("accessToken", response.accessToken);
    navigate("/");
  }

  function onFailure(response) {
    console.log(response);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form>
          <h1>Đăng kí tài khoản</h1>
          <input type="text" placeholder="Họ và tên" />
          <input type="text" placeholder="Ngày tháng năm sinh" />
          <input type="text" placeholder="Số điện thoại" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />
          <input type="password" placeholder="Xác nhận mật khẩu" />

          <button className={styles.signup_button} type="submit">
            Đăng kí
          </button>
          <div className={styles.third_party_wrapper}>
            <OAuth2Login
              className={styles.button}
              authorizationUrl="https://accounts.google.com/o/oauth2/auth"
              responseType="token"
              clientId="633817129267-8ve3g3uk7mhsrdd0elci28as9g7389sr.apps.googleusercontent.com"
              redirectUri="http://localhost:3000/auth/google/diamonjewelry"
              scope="profile"
              onSuccess={onSuccess}
              onFailure={onFailure}
            >
              <img
                src={require("../assets/images/google.png")}
                alt="google-icon"
              />
            </OAuth2Login>

            <OAuth2Login
              className={styles.button}
              authorizationUrl="https://accounts.google.com/o/oauth2/auth"
              responseType="token"
              clientId="633817129267-8ve3g3uk7mhsrdd0elci28as9g7389sr.apps.googleusercontent.com"
              redirectUri="http://localhost:3000/auth/google/diamonjewelry"
              scope="profile"
              onSuccess={onSuccess}
              onFailure={onFailure}
            >
              <img
                src={require("../assets/images/twitter.png")}
                alt="twitter-icon"
              />
            </OAuth2Login>

            <OAuth2Login
              className={styles.button}
              authorizationUrl="https://www.facebook.com/dialog/oauth"
              responseType="token"
              clientId="5374491585936093"
              redirectUri="http://localhost:3000/auth/facebook/diamonjewelry"
              scope="public_profile"
              onSuccess={onSuccess}
              onFailure={onFailure}
            >
              <img
                src={require("../assets/images/facebook.png")}
                alt="facebook-icon"
              />
            </OAuth2Login>
          </div>
        </form>
      </div>
      <div className={styles.banner}></div>
    </div>
  );
}
