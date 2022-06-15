import styles from "./AdminProductList.module.css"
import Sidebar from "../components/Sidebar"
import AdminNavbar from "../components/AdminNavbar"
import ProductDatatable from "../components/ProductDatatable"

const AdminProductList = () => {
	return (
		<div className={styles.list}>
			<Sidebar />
			<div className={styles.listContainer}>
				<AdminNavbar />
				<ProductDatatable />
			</div>
		</div>
	)
}

export default AdminProductList