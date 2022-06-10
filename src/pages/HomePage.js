import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Products from '../components/Products.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
    const products = [
        {
            name: "Bông tai Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            image: "https://picsum.photos/350/250"
        },
        {
            name: "Bông tai Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            image: "https://picsum.photos/350/250"
        },
        {
            name: "Bông tai Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            image: "https://picsum.photos/350/250"
        },
        {
            name: "Bông tai Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            image: "https://picsum.photos/350/250"
        },
        {
            name: "Bông tai Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            image: "https://picsum.photos/350/250"
        },
        {
            name: "Bông tai Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            image: "https://picsum.photos/350/250"
        },
        {
            name: "Bông tai Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            image: "https://picsum.photos/350/250"
        },
        {
            name: "Bông tai Bạc STYLE By PNJ DNA 0000Y000133",
            price: 765000,
            image: "https://picsum.photos/350/250"
        },
    ];

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
                    <Products></Products>
                </div>
            </section>

            <div className={ styles.contact }>
                <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
                <form>
                    <input placeholder="Ý kiến của bạn" />
                    <button>
                        <ion-icon name="mail"></ion-icon>
                        <span>GỬI ĐI Ý KIẾN</span>
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}