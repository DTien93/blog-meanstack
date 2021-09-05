import React, { useContext } from 'react'

import '../TopBar/topbar.css'

import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

export default function TopBar() {;
    const { user, dispatch } = useContext(Context)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
    
    return (
        <div className="top">
            <div className="top__left">
                <li className="top__left-item  item-active">
                    <Link className="link" to="/">
                         Trang chủ
                    </Link>
                </li>
                <li className="top__left-item">Blog</li>
                <li className="top__left-item">
                    <Link className="link" to="/write">
                            Viết bài
                     </Link>
                </li>
                <li className="top__left-item">ủng hộ</li>
                <li className="top__left-item">About me</li>
                <li className="top__left-item" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </div>

            <div className="top__right">
                <Link >
                    
                </Link>
                {user ? (
                    <Link>
                        <img className="top__right-img" src={user.profilePic} alt="" />
                    </Link>
                ) : (
                    <ul className="top__right-item">
                        <li className="top__right-item">
                            <Link className="link" to="/login">
                                Đăng nhập
                            </Link>
                        </li>
                        <li className="top__right-item">
                            <Link className="link" to="/register">
                                Đăng ký
                            </Link>
                        </li>
                            <li className="top__right-item"></li>
                            <li className="top__right-item top__search-icon"><i className="fas fa-search"></i></li>
                    </ul>
                )}
            
            </div>   
            </div>
    )
}
