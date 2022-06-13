import { Link, useNavigate } from 'react-router-dom';
import ls from 'local-storage';
import styles from './Header.module.css';
import Navbar from './Navbar.js';
import Swal from 'sweetalert2';

export default function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        ls.remove("accessToken");
        ls.remove("userId");
        navigate("/");
    }

    const handleDirectProfile = (e) => {
        if (ls.get("userId") == null) {
            e.preventDefault();
            Swal.fire({
				icon: 'info',
				title: 'Yêu cầu đăng nhập',
				text: 'Để vào trang cá nhân, bạn cần đăng nhập'
			});
        }
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
                        <Link to="/tai-khoan" onClick={handleDirectProfile}>Tài khoản</Link>
                    </li>
                </ul>
            </div>
            <Navbar />
        </div>

    );
}