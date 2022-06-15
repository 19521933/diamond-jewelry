import "./New.css";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import $ from 'jquery';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import axios from "axios";
import ls from 'local-storage';
import Swal from 'sweetalert2'

const New = ({ title }) => {
	const [file, setFile] = useState(null);

	const config = {
		headers: {
			Authorization: "Bearer " + ls.get("accessToken")
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();

		let image = "";

		const title = $("#title")[0].value;

		if (file != null) {
			const imageRef = ref(storage, "image " + title);
			await uploadBytes(imageRef, file);
			image = await getDownloadURL(imageRef);
		}

		const price = $("#price")[0].value;
		const stock = $("#stock")[0].value;
		const brand = $("#brand")[0].value;
		const material = $("#material")[0].value;
		const chainMaterial = $("#chainMaterial")[0].value;
		const purity = $("#purity")[0].value;
		const gender = $("#gender")[0].value;
		const color = $("#color")[0].value;
		const type = $("#type")[0].value;
		const group = $("#group")[0].value;
		const description = $("#description")[0].value;
		const sold = 0;

		const response = await axios.post(
			process.env.REACT_APP_API_URL + "/products",
			{ title, price, description, details: { brand, material, chainMaterial, purity, gender, color, type }, group, image, stock, sold },
			config
		);

		if (response.status === 201) {
			// showPopup("Thêm sản phẩm mới thành công!");
			Swal.fire(
				'Thành công!',
				'Sản phẩm đã được thêm vào thành công.',
				'success'
			  )
		}
		else {
			showPopup("Thêm sản phẩm mới thất bại!");
		}
	}

	function hidePopup() {
        $(".popup")[0].classList.add("hide");
    }

	function showPopup(message) {
        $(".popup")[0].classList.remove("hide");
        $("#message")[0].textContent = message;
    }

	return (
		<div className="new">
			<div className="popup hide">
                <p id="message"></p>
                <button className="close_button" onClick={hidePopup}>
                    X
                </button>
            </div>
			<Sidebar />
			<div className="newContainer">
				<AdminNavbar />
				<div className="top">
					<h1>{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt=""
						/>
					</div>
					<div className="right">
						<form onSubmit={handleSubmit}>
							<div className="formInput">
								<label htmlFor="file">
									Hình ảnh: <DriveFolderUploadOutlinedIcon className="icon" />
								</label>
								<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
									style={{ display: "none" }}
								/>
							</div>

							{/* {inputs.map((input) => (
								<div className="formInput" key={input.id}>
									<label>{input.label}</label>
									<input id={input.id} type={input.type} required />
								</div>
							))} */}
							<div className="formInput">
								<label>Tên sản phẩm</label>
								<input id="title" type="text" required />
							</div>
							<div className="formInput">
								<label>Giá tiền</label>
								<input id="price" type="number" required />
							</div>
							<div className="formInput">
								<label>Tồn kho</label>
								<input id="stock" type="number" required />
							</div>
							<div className="formInput">
								<label>Thương hiệu</label>
								<input id="brand" type="text" required />
							</div>
							<div className="formInput">
								<label>Chất liệu</label>
								<input id="material" type="text" required />
							</div>
							<div className="formInput">
								<label>Chất liệu dây</label>
								<input id="chainMaterial" type="text" required />
							</div>
							<div className="formInput">
								<label>Độ tinh khiết</label>
								<input id="purity" type="text" required />
							</div>
							<div className="formInput">
								<label>Giới tính</label>
								<input id="gender" type="text" required />
							</div>
							<div className="formInput">
								<label>Màu sắc</label>
								<input id="color" type="text" required />
							</div>
							<div className="formInput">
								<label>Loại</label>
								<input id="type" type="text" required />
							</div>
							<div className="formInput">
								<label>Nhóm</label>
								<input id="group" type="text" required />
							</div>

							<div className="formInput">
								<label>Mô tả</label>
								<textarea id="description" type="text" cols={40} rows={5} required />
							</div>
							<div className="formInput">
							</div>


							<button type="submit">Thêm</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
