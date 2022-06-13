import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import ls from 'local-storage'
import Swal from 'sweetalert2';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import axios from 'axios';
import tvkd from 'tieng-viet-khong-dau';


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
    const navigate = useNavigate();
    const suggestions = [];
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/products/titles");
            suggestions.push(...response.data);
        }
        fetchData();
    }, []);

    async function handleChange(event) {
        if (event.target.textContent !== undefined) {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/products/searchTitle", { params: { keyword: event.target.textContent } });
            navigate(`/san-pham/${response.data[0].id}/${tvkd.cFriendlyURI(response.data[0].title)}`);
        }
    }

    return (
        <nav className={styles.menu_container}>
            <Link to="/" className={`${styles.menu_logo} ${styles.left_wrapper}`}>
                <img src={require("../assets/images/logo.png")} alt="logo" />
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
                        <Autocomplete
                            disablePortal
                            id="search box"
                            options={suggestions}
                            sx={{ width: 300 }}
                            size="small"
                            renderInput={(params) => <TextField {...params} label="Tìm kiếm" />}
                            onChange={handleChange}
                        />
                        {/* <form class={styles.search}>
                            <input type="text" class={styles.searchTerm} placeholder="Tìm kiếm" />
                            <button type="submit" class={styles.searchButton}>
                                <i class="fa fa-search"></i>
                            </button>
                        </form> */}
                    </li>
                    <li>
                        <Link onClick={handleDirectLikePage} to="/yeu-thich">
                            <ion-icon name="heart-outline"></ion-icon>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleDirectCartPage} to="/gio-hang">
                            <ion-icon name="bag-handle-outline" alt="Giỏ hàng"></ion-icon>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
