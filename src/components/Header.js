import { Link, useNavigate } from 'react-router-dom';
import ls from 'local-storage';
import styles from './Header.module.css';
import Navbar from './Navbar.js';

export default function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        ls.remove("accessToken");
        ls.remove("userId");
        navigate("/");
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <ul className={styles.left}>
                    <li>
                        <ion-icon name="call-outline"></ion-icon>
                        <span>567 288 3345</span>
                    </li>
                    <li>
                        <ion-icon name="mail-outline"></ion-icon>
                        <span>info@diamondcompany.com</span>
                    </li>
                </ul>
                <ul className={styles.right}>
                    {
                        ls.get("accessToken") ? 
                        <li>
                            <ion-icon name="log-in-outline"></ion-icon>
                            <Link to="/" onClick={handleLogout}>Đăng xuất</Link>
                        </li> : 
                        <li>
                            <ion-icon name="log-in-outline"></ion-icon>
                            <Link to="/dang-nhap">Đăng nhập</Link>
                        </li>
                    }
                    
                    <li>
                        <ion-icon name="person-outline"></ion-icon>
                        <Link to="/tai-khoan">Tài khoản</Link>
                    </li>
                </ul>
            </div>
            <Navbar />
        </div>

    );
}