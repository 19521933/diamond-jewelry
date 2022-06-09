import "./AdminProductList.css"
import Sidebar from "../components/Sidebar"
import AdminNavbar from "../components/AdminNavbar"
import ProductDatatable from "../components/ProductDatatable"

const AdminProductList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <AdminNavbar />
        <ProductDatatable />
      </div>
    </div>
  )
}

export default AdminProductList