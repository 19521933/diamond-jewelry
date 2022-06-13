import "./ProfilePage.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import ls from 'local-storage';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';

function ProfilePage() {
    const userId = ls.get("userId");
    const accessToken = ls.get("accessToken");

    const [userInfo, setUserInfo] = useState();
    const [userTel, setUserTel] = useState('');
    const [userName, setUserName] = useState('');
    const [userAddress, setUserAddress] = useState('');
    
    async function fetchData() {
        const response = await axios.get(
            process.env.REACT_APP_API_URL + `/users/${userId}`, 
            {headers: {'Authorization': 'Bearer ' + accessToken}});
        setUserInfo(response.data);
        setUserName(response.data.fullName);
        setUserTel(response.data.tel);
        setUserAddress(response.data.address);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    const handleSaveButton = async () => {
        const response = await axios({
            method: 'put',
            url: process.env.REACT_APP_API_URL + '/users/',
            data: {
                id: userId,
                fullName: userName,
                dob: userInfo.dob,
                tel: userTel,
                email: userInfo.email,
                address: userAddress,
                role: userInfo.role,
                provider: userInfo.provider
            },
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Thành công',
                text: 'Lưu thông tin cá nhân thành công',
            });
            fetchData();
        }
    }

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
                                            <h4>{userInfo ? userInfo.fullName : ''}</h4>
                                            <p className="text-muted font-size-sm">Đã đăng nhập thông qua {userInfo ? userInfo.provider : ''}</p>
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
                                            <input type="text" class="form-control" onChange={e => setUserName(e.target.value)} defaultValue={userInfo ? userInfo.fullName : ''} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 info">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input disabled type="text" class="form-control" defaultValue={userInfo ? userInfo.email : ''} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 info">
                                            <h6 className="mb-0">Số điện thoại</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" onChange={e => setUserTel(e.target.value)} defaultValue={userInfo && userInfo.tel ? userInfo.tel : ''} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 info">
                                            <h6 className="mb-0">Ngày sinh</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input disabled type="text" className="form-control" defaultValue={userInfo && userInfo.dob ? userInfo.dob : ''} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 info">
                                            <h6 className="mb-0">Địa chỉ</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" onChange={e => setUserAddress(e.target.value)} defaultValue={userInfo && userInfo.address ? userInfo.address : ''} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 info"></div>
                                        <div className="col-sm-9 text-secondary">
                                            <input onClick={handleSaveButton} type="button" className="btn btn-primary px-4 changes-button" value="Lưu Thay Đổi" />
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
