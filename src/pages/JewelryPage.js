import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import JewelryPageProducts from '../components/JewelryPageProducts';
import styles from "./JewelryPage.module.css"

const JewelryPage = () => {

    return (
        <div className={styles.Container}>
            <Navbar />
            <Announcement />
            <h1 className={styles.Title}>Jewelry Page</h1>
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
                        <option className={styles.Option} disabled selected>Tuổi vàng</option>
                        <option className={styles.Option}>10K</option>
                        <option className={styles.Option}>14K</option>
                        <option className={styles.Option}>18K</option>
                        <option className={styles.Option}>24K</option>
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
                        <option className={styles.Option}>Sản phẩm cũ nhất</option>
                    </select>
                </div>
            </div>
            <JewelryPageProducts />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default JewelryPage