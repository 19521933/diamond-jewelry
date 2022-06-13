import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import HomePageProducts from '../components/HomePageProducts.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.banner_container}>
                <Link to="/trang-suc">
                    <img src={require("../assets/images/banner.png")} alt="summer-sale" />
                </Link>
            </div>

            <section className={styles.product_section}>
                <h1>Các Sản Phẩm <span>Nổi Bật</span></h1>
                <img src={require("../assets/images/diamond.png")} alt="diamond" />
                <div className={styles.product_container}>
                    <HomePageProducts></HomePageProducts>
                </div>
            </section>

            <div className={styles.contact}>
                <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
                <form>
                    <input placeholder="Email của bạn" />
                    <button>
                        <ion-icon name="mail"></ion-icon>
                        <span>GỬI ĐI</span>
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

