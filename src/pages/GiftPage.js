import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Newsletter from '../components/Newsletter';
import GiftPageProducts from '../components/GiftPageProducts';
import styles from "./GiftPage.module.css"

const GiftPage = () => {
    return (
        <div className={styles.Container}>
            <Header />
            <Announcement />
            <h1 className={styles.Title}>Trang Quà Tặng</h1>
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
                        <option className={styles.Option} disabled selected>Chất liệu</option>
                        <option className={styles.Option}>Vàng</option>
                        <option className={styles.Option}>Bạc</option>
                        <option className={styles.Option}>Kim Cương</option>
                        <option className={styles.Option}>Thạch Anh</option>
                    </select>

                    <select className={styles.Select}>
                        <option className={styles.Option} disabled selected>Loại trang sức</option>
                        <option className={styles.Option}>Bông tai</option>
                        <option className={styles.Option}>Nhẫn</option>
                        <option className={styles.Option}>Dây chuyền</option>
                        <option className={styles.Option}>Đồng hồ</option>
                    </select>

                    <select className={styles.Select}>
                        <option className={styles.Option} disabled selected>Giới tính</option>
                        <option className={styles.Option}>Nam</option>
                        <option className={styles.Option}>Nữ</option>
                        <option className={styles.Option}>Khác</option>
                    </select>

                    <select className={styles.Select}>
                        <option className={styles.Option} disabled selected>Màu chất liệu</option>
                        <option className={styles.Option}>Trắng</option>
                        <option className={styles.Option}>Xanh</option>
                        <option className={styles.Option}>Vàng</option>
                        <option className={styles.Option}>Đen</option>
                    </select>
                </div>

                <div className={styles.Filter}>
                    <span className={styles.FilterText}>Xắp xếp:</span>
                    <select className={styles.Select}>
                        <option className={styles.Option} selected>Sản phẩm mới nhất</option>
                        <option className={styles.Option}>Sản phẩm phổ biến nhất</option>
                        <option className={styles.Option}>Sản phẩm cũ nhất </option>
                    </select>
                </div>
            </div>
            <GiftPageProducts />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default GiftPage
