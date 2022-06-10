import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Newsletter from '../components/Newsletter';
import WatchPageProducts from '../components/WatchPageProducts';
import styles from "./WatchPage.module.css"

const WatchPage = () => {
    return (
        <div className={styles.Container}>
            <Header />
            <Announcement />
            <h1 className={styles.Title}>Watch Page</h1>
            <div className={styles.FilterContainer}>
                <div className={styles.Filter}>
                    <span className={styles.FilterText}>Bộ lọc sản phẩm:</span>
                    <select className={styles.Select}>
                        <option className={styles.Option} disabled selected>Thương hiệu</option>
                        <option className={styles.Option}>PNJ</option>
                        <option className={styles.Option}>GoldRiver</option>
                        <option className={styles.Option}>CrystalCop</option>
                    </select>

                    <select className={styles.Select}>
                        <option className={styles.Option} disabled selected>Giá</option>
                        <option className={styles.Option}>Vàng</option>
                        <option className={styles.Option}>Bạc</option>
                        <option className={styles.Option}>Kim Cương</option>
                        <option className={styles.Option}>Thạch Anh</option>
                    </select>

                    <select className={styles.Select}>
                        <option className={styles.Option} disabled selected>Giới tính</option>
                        <option className={styles.Option}>Nam</option>
                        <option className={styles.Option}>Nữ</option>
                        <option className={styles.Option}>Khác</option>
                    </select>

                    <select className={styles.Select}>
                        <option className={styles.Option} disabled selected>Chất liệu dây</option>
                        <option className={styles.Option}>Dây Kim Loại</option>
                        <option className={styles.Option}>Dây Cao Su</option>
                        <option className={styles.Option}>Dây Da</option>
                        <option className={styles.Option}>Dây Vải</option>
                        <option className={styles.Option}>Dây Thép</option>
                        <option className={styles.Option}>Dây Tổng Hợp</option>
                    </select>

                </div>

                <div className={styles.Filter}>
                    <span className={styles.FilterText}>Xắp xếp:</span>
                    <select className={styles.Select}>
                        <option className={styles.Option} selected>Sản phẩm mới nhất</option>
                        <option className={styles.Option}>Sản phẩm phổ biến nhất</option>
                        <option className={styles.Option}>Sản phẩm cũ nhất</option>
                    </select>
                </div>
            </div>
            <WatchPageProducts />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default WatchPage