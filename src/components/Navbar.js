import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import ls from 'local-storage'
import Swal from 'sweetalert2';

export default function Navbar() {
    const userId = ls.get("userId");

    const handleDirectCartPage = (e) => {
        if (userId == null) {
            e.preventDefault();
            Swal.fire({
				icon: 'info',
				title: 'Yêu cầu đăng nhập',
				text: 'Bạn cần đăng nhập để vào trang giỏ hàng'
			});
        }
    }

    const handleDirectLikePage = (e) => {
        if (userId == null) {
            e.preventDefault();
            Swal.fire({
				icon: 'info',
				title: 'Yêu cầu đăng nhập',
				text: 'Bạn cần đăng nhập để vào trang yêu thích'
			});
        }
    }

    return (
        <nav className={styles.menu_container}>
            <Link to="/" className={`${styles.menu_logo} ${styles.left_wrapper}`}>
                <img src={ require("../assets/images/logo.png") } alt="logo" />
            </Link>

            <div className={styles.menu}>
                <ul className={styles.center_wrapper}>
                    <li>
                        <Link to="/">
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link to="/trang-suc">
                            Trang sức
                        </Link>
                    </li>
                    <li>
                        <Link to="/dong-ho">
                            Đồng hồ
                        </Link>
                    </li>
                    <li>
                        <Link to="/qua-tang">
                            Quà tặng
                        </Link>
                    </li>
                    <li>
                        <Link to="/lien-he">
                            Liên hệ
                        </Link>
                    </li>
                </ul>
            </div>
            
            <div className={styles.menu}>
                <ul className={styles.right_wrapper}>
                    <li>
                        <form action="">
                            <input type="search" placeholder="Search here ..."></input>
                            <ion-icon class="md hydrated search-icon" name="search-outline"></ion-icon>
                        </form>
                    </li>
                    <li>
                        <Link onClick={handleDirectLikePage} to="/yeu-thich">
                            <ion-icon name="heart-outline"></ion-icon>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleDirectCartPage} to="/gio-hang">
                            <ion-icon name="bag-handle-outline"></ion-icon>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
