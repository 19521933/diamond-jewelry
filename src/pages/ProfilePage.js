import "./ProfilePage.css"
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProfilePage() {
    return (
        <>
            <Header />
            <div className="bootstrap container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110" />
                                        <div className="mt-3">
                                            <h4>Thành Nhân</h4>
                                            <p className="text-secondary mb-1">Khách hàng</p>
                                            <p className="text-muted font-size-sm">TP Hồ Chí Minh</p>
                                            <button className="btn btn-primary">Đơn hàng</button>
                                            <button className="btn btn-outline-primary">Tin nhắn</button>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                            <span className="text-secondary">@thanhnhan</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                            <span className="text-secondary">thanhnhan</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                            <span className="text-secondary">thanhnhan</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-3 info">
                                            <h6 className="mb-0">Họ và Tên</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" value="Thanh Nhan" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 info">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" value="thanhnhan@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 info">
                                            <h6 className="mb-0">Số điện thoại</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" value="(239) 816-9029" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 info">
                                            <h6 className="mb-0">Đơn đặt hàng</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" value="(320) 380-4539" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 info">
                                            <h6 className="mb-0">Địa chỉ</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" value="Phường Linh Trung,Thủ Đức" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 info"></div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="button" className="btn btn-primary px-4 changes-button" value="Lưu Thay Đổi" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProfilePage;