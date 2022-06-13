import styles from './NoProductFound.module.css';

export default function NoProductFound() {
    return (
        <div className={styles.container}>
            <p>Hiện không có sản phẩm nào.</p>
            <img src={require("../assets/images/no-product-found.png")} alt="không có sản phẩm" />
        </div>
    );
}