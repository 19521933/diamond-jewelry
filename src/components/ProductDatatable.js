import "./Datatable.css";
import { DataGrid } from "@mui/x-data-grid";
// import { productColumns, productRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDatatable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const products = await axios.get("http://diamondjewelry-api.herokuapp.com/api/v1/products");

			const productRows = products.data.map((product) => ({
				id: product.id,
				image: product.image,
				title: product.title,
				price: product.price,
				stock: product.stock,
				description: product.description,
				brand: product.details.brand,
				material: product.details.material,
				chainMaterial: product.details.chainMaterial,
				purity: product.details.purity,
				gender: product.details.gender,
				color: product.details.color,
				type: product.details.type
			}));

			setData(productRows);
		}
		fetchData();
	}, []);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const productColumns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "image",
			headerName: "Hình ảnh",
			width: 120,
			renderCell: (params) => {
				return (
					<img src={params.row.image} alt={params.row.title} />
				);
			},
		},
		{
			field: "title",
			headerName: "Tên Sản Phẩm",
			width: 230,
		},
		{
			field: "price",
			headerName: "Giá tiền (vnđ)",
			width: 100,
		},

		{
			field: "stock",
			headerName: "Tồn kho",
			width: 80,
		},
		{
			field: "brand",
			headerName: "Thương hiệu",
			width: 120,
		},
		{
			field: "material",
			headerName: "Chất liệu",
			width: 80,
		},
		{
			field: "chainMaterial",
			headerName: "Chất liệu dây",
			width: 100,
		},
		{
			field: "purity",
			headerName: "Độ tinh khiết",
			width: 100,
		},
		{
			field: "gender",
			headerName: "Giới tính",
			width: 80,
		},
		{
			field: "color",
			headerName: "Màu sắc",
			width: 80,
		},
		{
			field: "type",
			headerName: "Loại",
			width: 80,
		},
		{
			field: "description",
			headerName: "Mô tả",
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
							<Link to="test" style={{ textDecoration: "none" }}>
								<div className="viewButton">Xem</div>
							</Link>
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
					Thao Tác Sản Phẩm
					<Link to="new" className="link">
						Thêm
					</Link>
				</div>
				<DataGrid
					className="datagrid"
					rows={data}
					columns={productColumns.concat(actionColumn)}
					rowHeight={120}
					pageSize={9}
					rowsPerPageOptions={[9]}
					checkboxSelection
				/>
			</div>
		</>
	);
};

export default ProductDatatable;
