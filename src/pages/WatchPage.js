import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Newsletter from '../components/Newsletter';
import WatchPageProducts from '../components/WatchPageProducts';
import styles from "./WatchPage.module.css"

const WatchPage = () => {
    const [brand, setBrand] = useState();
    const [material, setMaterial] = useState();
    const [chainMaterial, setChainMaterial] = useState();
    const [gender, setGender] = useState();
    const [sortMode, setSortMode] = useState();

    const filters = { brand, material, gender, chainMaterial, sortMode };

    return (
        <div className={styles.Container}>
            <Header />
            <Announcement />
            <h1 className={styles.Title}>Trang Đồng Hồ</h1>
            <div className={styles.FilterContainer}>
                <div className={styles.Filter}>
                    <span className={styles.FilterText}>Bộ lọc sản phẩm:</span>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Thương hiệu</option>
                        <option value={"CK"} className={styles.Option}>CK</option>
                        <option value={"Casio"} className={styles.Option}>Casio</option>
                        <option value={"Citizen"} className={styles.Option}>Citizen</option>
                        <option value={"Fossil"} className={styles.Option}>Fossil</option>
                        <option value={"Jacques du manoir"} className={styles.Option}>Jacques du manoir</option>
                        <option value={"Longines"} className={styles.Option}>Longines</option>
                        <option value={"Orient"} className={styles.Option}>Orient</option>
                        <option value={"Michael Kors"} className={styles.Option}>Michael Kors</option>
                        <option value={"Tissot"} className={styles.Option}>Tissot</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>

                    <select value={material} onChange={(e) => setMaterial(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Chất liệu</option>
                        <option value={"Thép Không Gỉ"} className={styles.Option}>Thép Không Gỉ</option>
                        <option value={"Thép Không Gỉ Mạ PVD"} className={styles.Option}>Thép Không Gỉ Mạ PVD</option>
                        <option value={"Thép cao cấp không gỉ 316L"} className={styles.Option}>Thép cao cấp không gỉ 316L</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>

                    <select value={gender} onChange={(e) => setGender(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Giới tính</option>
                        <option value={"Nam"} className={styles.Option}>Nam</option>
                        <option value={"Nữ"} className={styles.Option}>Nữ</option>
                        <option value={"Trẻ em"} className={styles.Option}>Trẻ em</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                        <option value={"Hiển thị tất cả"} className={styles.Option}>Hiển thị tất cả</option>
                    </select>

                    <select value={chainMaterial} onChange={(e) => setChainMaterial(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Chất liệu dây</option>
                        <option value={"Cao Su Cao Cấp"} className={styles.Option}>Cao su cao cấp</option>
                        <option value={"Da"} className={styles.Option}>Da</option>
                        <option value={"Thép Không Gỉ"} className={styles.Option}>Thép Không Gỉ</option>
                        <option value={"Kim loại"} className={styles.Option}>Kim loại</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>
                </div>

                <div className={styles.Filter}>
                    <span className={styles.FilterText}>Sắp xếp:</span>
                    <select value={sortMode} onChange={(e) => setSortMode(e.target.value)} className={styles.Select}>
                        <option value={"latest"} className={styles.Option} selected>Sản phẩm mới nhất</option>
                        <option value={"mostPopular"} className={styles.Option}>Sản phẩm phổ biến nhất</option>
                        <option value={"oldest"} className={styles.Option}>Sản phẩm cũ nhất</option>
                    </select>
                </div>
            </div>
            <WatchPageProducts filters={filters} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default WatchPage
