import React from 'react'
import { JewelryProducts } from '../data'
import Product from "./Product"
import styles from "./JewelryPageProducts.module.css"

const JewelryPageProducts = () => {
  return (
    <>
    <div className={styles.Title}>CÁC SẢN PHẨM TRANG SỨC</div>
    <div className={styles.Container}>
        {JewelryProducts.map((item)=>(
                <Product item={item} key={item.id}/>
        ))}
    </div>
    </>
  )
}

export default JewelryPageProducts
