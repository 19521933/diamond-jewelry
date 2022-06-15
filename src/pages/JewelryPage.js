import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Newsletter from '../components/Newsletter';
import JewelryPageProducts from '../components/JewelryPageProducts';
import styles from "./JewelryPage.module.css"

const JewelryPage = () => {
    const [brand, setBrand] = useState();
    const [material, setMaterial] = useState();
    const [chainMaterial, setChainMaterial] = useState();
    const [type, setType] = useState();
    const [purity, setPurity] = useState();
    const [gender, setGender] = useState();
    const [color, setColor] = useState();
    const [sortMode, setSortMode] = useState();

    const filters = { brand, material, chainMaterial, type, purity, gender, color, sortMode };

    return (
        <div className={styles.Container}>
            <Header />
            <Announcement />
            <h1 className={styles.Title}>Trang Sức</h1>
            <div className={styles.FilterContainer}>
                <div className={styles.Filter}>
                    <span className={styles.FilterText}>Bộ lọc sản phẩm:</span>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Thương hiệu</option>
                        <option value={"PNJ"} className={styles.Option}>PNJ</option>
                        <option value={"PNJSilver"} className={styles.Option}>PNJSilver</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>

                    <select value={material} onChange={(e) => setMaterial(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Chất liệu</option>
                        <option value={"Vàng"} className={styles.Option}>Vàng</option>
                        <option value={"Bạc"} className={styles.Option}>Bạc</option>
                        <option value={"Kim cương"} className={styles.Option}>Kim Cương</option>
                        <option value={"Thạch Anh"} className={styles.Option}>Thạch Anh</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>

                    <select value={chainMaterial} onChange={(e) => setChainMaterial(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Chất liệu dây</option>
                        <option value={"Citrine"} className={styles.Option}>Citrine</option>
                        <option value={"Không gắn đá"} className={styles.Option}>Không gắn đá</option>
                        <option value={"Ngọc trai"} className={styles.Option}>Ngọc trai</option>
                        <option value={"Ruby"} className={styles.Option}>Ruby</option>
                        <option value={"Sythetic"} className={styles.Option}>Sythetic</option>
                        <option value={"Topaz"} className={styles.Option}>Topaz</option>
                        <option value={"Xoàn mỹ"} className={styles.Option}>Xoàn mỹ</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>

                    <select value={type} onChange={(e) => setType(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Loại trang sức</option>
                        <option value={"Bông tai"} className={styles.Option}>Bông tai</option>
                        <option value={"Nhẫn"} className={styles.Option}>Nhẫn</option>
                        <option value={"Dây chuyền"} className={styles.Option}>Dây chuyền</option>
                        <option value={"Vòng tay"} className={styles.Option}>Vòng tay</option>
                        <option value={"Tất cả"} className={styles.Option}>Tất cả</option>
                    </select>

                    <select value={purity} onChange={(e) => setPurity(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Tuổi vàng</option>
                        <option value={"10K"} className={styles.Option}>10K</option>
                        <option value={"14K"} className={styles.Option}>14K</option>
                        <option value={"18K"} className={styles.Option}>18K</option>
                        <option value={"24K"} className={styles.Option}>24K</option>
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

                    <select value={color} onChange={(e) => setColor(e.target.value)} className={styles.Select}>
                        <option className={styles.Option} disabled selected>Màu chất liệu</option>
                        <option value={"Trắng"} className={styles.Option}>Trắng</option>
                        <option value={"Xanh"} className={styles.Option}>Xanh</option>
                        <option value={"Vàng"} className={styles.Option}>Vàng</option>
                        <option value={"Đen"} className={styles.Option}>Đen</option>
                        <option value={"Bạc"} className={styles.Option}>Bạc</option>
                        <option value={"Cam"} className={styles.Option}>Cam</option>
                        <option value={"Đỏ"} className={styles.Option}>Đỏ</option>
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
            <JewelryPageProducts filters={filters} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default JewelryPage
