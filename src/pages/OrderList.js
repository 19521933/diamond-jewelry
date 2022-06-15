import styles from "./OrderList.module.css"
import Sidebar from "../components/Sidebar"
import AdminNavbar from "../components/AdminNavbar"
import OrderDatatable from "../components/OrderDatatable"

const OrderList = () => {
    return (
        <div className={styles.list}>
            <Sidebar />
            <div className={styles.listContainer}>
                <AdminNavbar />
                <OrderDatatable />
            </div>
        </div>
    )
}

export default OrderList