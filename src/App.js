import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import LikePage from './pages/LikePage';
import ProductPage from './pages/ProductPage';
import GiftPage from './pages/GiftPage';
import JewelryPage from './pages/JewelryPage';
import WatchPage from './pages/WatchPage';
import ProfilePage from './pages/ProfilePage';
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import AdminProductList from "./pages/AdminProductList";
import Single from "./pages/Single";
import New from "./pages/New";
import OrderList from './pages/OrderList'
import ContactList from './pages/ContactList'

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/gio-hang" element={<CartPage />} />
				<Route path="/gio-hang" element={<CartPage />} />
				<Route path="/dang-nhap" element={<LoginPage />} />
				<Route path="/dang-ki" element={<RegisterPage />} />
				<Route path="/lien-he" element={<ContactPage />} />
				<Route path="/yeu-thich" element={<LikePage />} />
				<Route path="/trang-suc" element={<JewelryPage />} />
				<Route path="/dong-ho" element={<WatchPage />} />
				<Route path="/qua-tang" element={<GiftPage />} />
				<Route path="/tai-khoan" element={<ProfilePage />} />
				<Route path="/san-pham/:productId/:productTitle" element={<ProductPage />} />
				<Route path="/admin">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="users">
						<Route index element={<UserList />} />
						<Route path=":userId" element={<Single />} />
						{/* <Route
							path="new"
							element={<New inputs={userInputs} title="Quản Lý Khách Hàng:" />}
						/> */}
					</Route>
					<Route path="products">
						<Route index element={<AdminProductList />} />
						<Route path=":productId" element={<Single />} />
						<Route
							path="new"
							element={<New title="Quản Lý Sản Phẩm:" />}
						/>
					</Route>
					<Route path="orders">
						<Route index element={<OrderList />} />
					</Route>
					<Route path="contacts">
						<Route index element={<ContactList />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
