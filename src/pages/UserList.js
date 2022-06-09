import "./UserList.css"
import Sidebar from "../components/Sidebar"
import AdminNavbar from "../components/AdminNavbar"
import UserDatatable from "../components/UserDatatable"

const UserList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <AdminNavbar />
        <UserDatatable />
      </div>
    </div>
  )
}

export default UserList