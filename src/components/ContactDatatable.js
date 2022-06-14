import axios from 'axios';
import "./Datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ls from 'local-storage';

const UserDatatable = () => {
    const [data, setData] = useState([]);

    const config = {
        headers: {
            Authorization: "Bearer " + ls.get("accessToken")
        }
    }

    useEffect(() => {
        async function fetchData() {
            const contacts = await axios.get(process.env.REACT_APP_API_URL + "/contacts", config);

            const contactRows = contacts.data.map((contact) => ({
                id: contact.id,
                senderName: contact.senderName,
                senderEmail: contact.senderEmail,
                content: contact.content,
            }));

            setData(contactRows);
        }
        fetchData();
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        axios.delete(process.env.REACT_APP_API_URL + "/contacts/" + id, config);
    };

    const userColumns = [
        { field: "id", headerName: "ID", width: 200 },
        {
            field: "senderName",
            headerName: "Tên người gửi",
            width: 200,
        },
        {
            field: "senderEmail",
            headerName: "Email người gửi",
            width: 230,
        },
        {
            field: "content",
            headerName: "Nội dung",
            width: 500,
        },
    ];

    const actionColumn = [
        {
            field: "action",
            headerName: "Thao tác",
            width: 90,
            renderCell: (params) => {
                return (
                    <>
                        <div className="cellAction">
                            {/* <Link to="/admin/users/test" style={{ textDecoration: "none" }}>
                                <div className="viewButton">Xem</div>
                            </Link> */}
                            <div
                                className="deleteButton"
                                onClick={() => handleDelete(params.row.id)}
                            >
                                Xóa
                            </div>
                        </div>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <div className="datatable">
                <div className="datatableTitle">
                    Thao Tác Liên Hệ
                </div>
                <DataGrid
                    className="datagrid"
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </>
    );
};

export default UserDatatable;
