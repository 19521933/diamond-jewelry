import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<>
			<div className={styles.Footer}>
				<div className={styles.Left}>
					<h1 className={styles.Logo}>DIAMOND JEWELRY</h1>
					<p className={styles.Desc}>
						Hội tụ và Tỏa Sáng là giá trị mà công ty DiamoundCity đem lại,
						cùng với sự kết hợp tinh tế của trang sức đa dạng đem lại giá trị 
						đẳng cấp cho khách hàng, tiên phong đặt chữ tín lên hàng đầu.
					</p>
					<div className={styles.SocialContainer}>
						<div className={styles.SocialIcon} color="3B5999">
							<Facebook />
						</div>
						<div className={styles.SocialIcon} color="E4405F">
							<Instagram />
						</div>
						<div className={styles.SocialIcon} color="55ACEE">
							<Twitter />
						</div>
						<div className={styles.SocialIcon} color="E60023">
							<Pinterest />
						</div>
					</div>
				</div>

				<div className={styles.Center}>
					<h3 className={styles.Title}>Các Links Hữu Dụng</h3>
					<ul className={styles.List}>
						<li className={styles.ListItem}>Trang chủ</li>
						<li className={styles.ListItem}>Trang sức</li>
						<li className={styles.ListItem}>Đồng Hồ</li>
						<li className={styles.ListItem}>Giỏ hàng</li>
						<li className={styles.ListItem}>Danh sách yêu thích</li>
					</ul>
				</div>

				<div className={styles.Center2}>
					<h3 className={styles.Title}>Các Links Khác</h3>
					<ul className={styles.List}>
						<li className={styles.ListItem}>Trang cá nhân</li>
						<li className={styles.ListItem}>Facebook</li>
						<li className={styles.ListItem}>Gmail</li>
						<li className={styles.ListItem}>Đăng nhập</li>
						<li className={styles.ListItem}>Liên hệ</li>
					</ul>
				</div>

				<div className={styles.Right}>
					<h3 className={styles.Title}>Thông tin liên lạc</h3>
					<div className={styles.ContactItem}>
						<Room style={{ marginRight: "10px" }} /> 311 Nguyen Thien Thuat , Quan 1 Viet Nam
					</div>
					<div className={styles.ContactItem}>
						<Phone style={{ marginRight: "10px" }} /> +1 538 677 859
					</div>
					<div className={styles.ContactItem}>
						<MailOutline style={{ marginRight: "10px" }} /> contact@diamound.city
					</div>
					<img className={styles.Payment} alt="" src="https://i.ibb.co/Qfvn4z6/payment.png" />
				</div>
			</div>

			<div className={styles.bottom}>
				<p>@Bản quyền 2019. Tất cả các quyền được bảo lưu</p>

				<ul>
					<li>
						<Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
					</li>
					<li>
						<Link to="/dieu-khoan-va-dieu-kien">Điều khoản và điều kiện</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Footer

