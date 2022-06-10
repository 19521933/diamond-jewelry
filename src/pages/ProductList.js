import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import "./ProductList.css"

const ProductList = () => {
  return (
    <div className="Container-ProductList">
      <Header/>
      <Announcement/>
      <h1 className="Title-ProductList">Rings</h1>
      <div className="FilterContainer">
          <div className="Filter">
              <span className="FilterText">Bộ lọc sản phẩm:</span>
              <select className="Select">
                  <option className="Option" disabled selected>Thương hiệu</option>
                  <option className="Option">PNJ</option>
                  <option className="Option">GoldRiver</option>
                  <option className="Option">CrystalCop</option>
              </select>

              <select className="Select">
                <option className="Option" disabled selected>Chất liệu</option>
                <option className="Option">Vàng</option>
                <option className="Option">Bạc</option>
                <option className="Option">Kim Cương</option>
                <option className="Option">Thạch Anh</option>
            </select>

            <select className="Select">
                <option className="Option" disabled selected>Chất liệu vàng</option>
                <option className="Option">10K</option>
                <option className="Option">14K</option>
                <option className="Option">18K</option>
                <option className="Option">24K</option>
            </select>

            <select className="Select">
                <option className="Option" disabled selected>Giới tính</option>
                <option className="Option">Nam</option>
                <option className="Option">Nữ</option>
                <option className="Option">Khác</option>
            </select>

            <select className="Select">
                <option className="Option" disabled selected>Màu chất liệu</option>
                <option className="Option">Trắng</option>
                <option className="Option">Xanh</option>
                <option className="Option">Vàng</option>
                <option className="Option">Đen</option>
            </select>
          </div>

          <div className="Filter">
            <span className="FilterText">Xắp xếp:</span>
            <select className="Select">
                <option className="Option" selected>Sản phẩm mới nhất</option>
                <option className="Option">Sản phẩm phổ biến nhất (asc)</option>
                <option className="Option">Sản phẩm cũ (desc)</option>
          </select>
          </div>
      </div>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductList
