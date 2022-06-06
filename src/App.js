import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import LikePage from './pages/LikePage';
import Product from './pages/Product';
import GiftPage from './pages/GiftPage';
import JewelryPage from './pages/JewelryPage';
import WatchPage from './pages/WatchPage';
import ProfilePage from './pages/ProfilePage';

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
				<Route path="/san-pham" element={<Product />} />
				<Route path="/tai-khoan" element={<ProfilePage />} />
			</Routes>
		</Router>
	);
}

export default App;
