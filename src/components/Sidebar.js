import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">Diamond Jewelry</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MỤC CHÍNH</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Bảng Tóm Tắt</span>
            </li>
          </Link>
          <p className="title">DANH SÁCH</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Khách Hàng</span>
            </li>
          </Link>
          <Link to="/admin/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Sản Phẩm</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Đơn Hàng</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Vận Chuyển</span>
          </li>
          <p className="title">HỮU DỤNG</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Trạng Thái</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Thông Báo</span>
          </li>
          <p className="title">QUẢN LÝ</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Quản Lý Hệ Thống</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Cài Đặt</span>
          </li>
          <p className="title">NGƯỜI DÙNG</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Cá Nhân</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Đăng Xuất</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
