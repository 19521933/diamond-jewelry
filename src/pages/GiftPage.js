import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Newsletter from '../components/Newsletter';
import GiftPageProducts from '../components/GiftPageProducts';
import styles from "./GiftPage.module.css"

const GiftPage = () => {
    const [brand, setBrand] = useState();
    const [material, setMaterial] = useState();
    const [chainMaterial, setChainMaterial] = useState();
    const [type, setType] = useState();
    const [gender, setGender] = useState();
    const [sortMode, setSortMode] = useState();

    const filters = { brand, material, chainMaterial, type, gender, sortMode };

    return (
        <div className={styles.Container}>
            <Header />
            <Announcement />
            <h1 className={styles.Title}>Trang Quà Tặng</h1>
            <div className={styles.FilterContainer}>
                <div className={styles.Filter}>
                    <span className={styles.FilterText}>Bộ lọc sản phẩm:</span>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Thương hiệu</option>
                        <option value={"PNJ"} className={styles.Option}>PNJ</option>
                        <option value={"PNJP"} className={styles.Option}>PNJP</option>
                        <option value={"PNJSilver"} className={styles.Option}>PNJSilver</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>

                    <select value={material} onChange={(e) => setMaterial(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Chất liệu</option>
                        <option value={"Vàng"} className={styles.Option}>Vàng</option>
                        <option value={"Bạc"} className={styles.Option}>Bạc</option>
                        <option value={"Da cao cấp"} className={styles.Option}>Da cao cấp</option>
                        <option value={"Xoàn mỹ"} className={styles.Option}>Xoàn mỹ</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>

                    <select value={chainMaterial} onChange={(e) => setChainMaterial(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Chất liệu dây</option>
                        <option value={"Không gắn đá"} className={styles.Option}>Không gắn đá</option>
                        <option value={"Kim cương"} className={styles.Option}>Kim cương</option>
                        <option value={"Ngọc trai"} className={styles.Option}>Ngọc trai</option>
                        <option value={"Moon"} className={styles.Option}>Moon</option>
                        <option value={"Jadeite"} className={styles.Option}>Jadeite</option>
                        <option value={"Ruby"} className={styles.Option}>Ruby</option>
                        <option value={"Sythetic"} className={styles.Option}>Sythetic</option>
                        <option value={"Xoàn mỹ"} className={styles.Option}>Xoàn mỹ</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>

                    <select value={type} onChange={(e) => setType(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Loại trang sức</option>
                        <option value={"Dây cổ"} className={styles.Option}>Dây cổ</option>
                        <option value={"Mặt dây chuyền"} className={styles.Option}>Mặt dây chuyền</option>
                        <option value={"Cài măng sét"} className={styles.Option}>Cài măng sét</option>
                        <option value={"Cài áo"} className={styles.Option}>Cài áo</option>
                        <option value={"Tranh phong thủy"} className={styles.Option}>Tranh phong thủy</option>
                        <option value={"Tượng phong thủy"} className={styles.Option}>Tượng phong thủy</option>
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
            <GiftPageProducts filters={filters} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default GiftPage
