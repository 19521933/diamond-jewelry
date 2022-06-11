import React from 'react'
import { popularProducts } from '../data'
import Product from "./Product"
import styles from "./Products.module.css"

const Products = () => {
  return (
    <>
      <div className={styles.Title}>CÁC SẢN PHẨM NỔI BẬT</div>
      <div className={styles.Container}>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default Products
