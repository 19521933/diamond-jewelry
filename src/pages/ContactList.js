import styles from "./ContactList.module.css"
import Sidebar from "../components/Sidebar"
import AdminNavbar from "../components/AdminNavbar"
import ContactDatatable from "../components/ContactDatatable"

const ContactList = () => {
    return (
        <div className={styles.list}>
            <Sidebar />
            <div className={styles.listContainer}>
                <AdminNavbar />
                <ContactDatatable />
            </div>
        </div>
    )
}

export default ContactList