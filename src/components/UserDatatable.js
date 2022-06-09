import axios from 'axios';
import "./Datatable.css";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const UserDatatable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const users = await axios.get("http://diamondjewelry-api.herokuapp.com/api/v1/users")

			const userRows = users.data.map((user) => ({
				id: user.id,
				fullName: user.fullName,
				dob: user.dob,
				email: user.email,
				tel: user.tel,
				address: user.addresses[0]
			}));

			setData(userRows);
		}
		fetchData();
	}, []);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const userColumns = [
		{ field: "id", headerName: "ID", width: 200 },
		{
			field: "fullName",
			headerName: "Tên Khách Hàng",
			width: 200,
		},
		{ field: "dob", headerName: "Ngày sinh", width: 100 },
		{
			field: "email",
			headerName: "Email",
			width: 230,
		},

		{
			field: "tel",
			headerName: "Số điện thoại",
			width: 100,
		},
		{
			field: "address",
			headerName: "Địa chỉ",
			width: 230,
		},
	];

	const actionColumn = [
		{
			field: "action",
			headerName: "Thao tác",
			width: 120,
			renderCell: (params) => {
				return (
					<>
						<div className="cellAction">
							<Link to="/admin/users/test" style={{ textDecoration: "none" }}>
								<div className="viewButton">Xem</div>
							</Link>
							<div
								className="deleteButton"
								onClick={() => handleDelete(params.row.id)}
							>
								Xóa
							</div>
						</div>

						{/* <div className="cellAction">
            <Link to="/products/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div> */}
					</>
				);
			},
		},
	];

	// const actionColumn2 = [
	//   {
	//     field: "action",
	//     headerName: "Action",
	//     width: 200,
	//     renderCell: (params) => {
	//       return (
	//         <>
	//         <div className="cellAction">
	//           <Link to="/products/test" style={{ textDecoration: "none" }}>
	//             <div className="viewButton">View</div>
	//           </Link>
	//           <div
	//             className="deleteButton"
	//             onClick={() => handleDelete(params.row.id)}
	//           >
	//             Delete
	//           </div>
	//         </div>
	//         </>
	//       );
	//     },
	//   },
	// ];



	return (
		<>
			<div className="datatable">
				<div className="datatableTitle">
					Thao Tác Khách Hàng
					<Link to="/admin/users/new" className="link">
						Thêm
					</Link>
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

			{/* <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns.concat(actionColumn2)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div> */}
		</>
	);
};

export default UserDatatable;
