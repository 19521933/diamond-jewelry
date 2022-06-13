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
                                            <p className="text-muted font-size-sm">TP Hồ Chí Minh</p>
                                            <button className="btn btn-primary">Đơn hàng</button>
                                            <button className="btn btn-outline-primary">Tin nhắn</button>
                                        </div>                                    
                                    </div>
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
