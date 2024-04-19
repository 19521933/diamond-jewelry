import React, { useEffect } from 'react';
import styles from "./Product.module.css";
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import tvkd from 'tieng-viet-khong-dau';

const Product = ({ product }) => {
    // format currency
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price);
    return (
        // <LazyLoad className={styles.Container} offset={100} once>
        //     {/* <div className={styles.Container}> */}
        //     <Link to={`/san-pham/${product.id}/${tvkd.cFriendlyURI(product.title)}`}>
        //         <img className={styles.Image} alt={product.title} src={product.image} />

        //         <h1 className={styles.title}>{product.title}</h1>

        //         {/* <p className={styles.desc}>{product.desc}</p> */}
        //         <span className={styles.price}>{formattedPrice}</span>
        //         {/* </div> */}
        //     </Link>
        // </LazyLoad>

        <LazyLoad className={styles.Container} offset={100} once>
            <Link to={`/san-pham/${product.id}/${tvkd.cFriendlyURI(product.title)}`}>
                <div className={"card text-center"} style={{ width: '18rem' }}>
                    <img alt={product.title} src={product.image} />
                    <div className="card-body">
                        <h1 className={"card-title fs-5 " + styles.title}>{product.title}</h1>
                        <span className={styles.price}>{formattedPrice}</span>
                    </div>
                </div>
            </Link>
        </LazyLoad>
    )
}

export default Product
