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
            const orders = await axios.get(process.env.REACT_APP_API_URL + "/orders", config);
            console.log(orders);
            const contactRows = orders.data.map((order) => ({
                id: order.id,
                userId: order.userId,
                items: order.items.map(item => item.id),
                address: order.address,
                status: order.status,
                totalCost: order.totalCost,
            }));

            setData(contactRows);
        }
        fetchData();
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        axios.delete(process.env.REACT_APP_API_URL + "/orders/" + id, config);
    };

    const userColumns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "userId",
            headerName: "User ID",
            width: 100,
        },
        {
            field: "items",
            headerName: "Các sản phẩm",
            width: 350,
        },
        {
            field: "address",
            headerName: "Địa chỉ",
            width: 300,
        },
        {
            field: "status",
            headerName: "Trạng thái",
            width: 120,
        },
        {
            field: "totalCost",
            headerName: "Tổng tiền",
            width: 150,
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
                    Thao Tác Đơn Hàng
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
