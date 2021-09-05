import React from 'react'

import '../TopBar/topbar.css'

import { Link } from 'react-router-dom'

export default function TopBar() {;
    const user = true
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

            </div>

            <div className="top__right">
                {user ? (
                    <Link>
                        <img className="top__right-img" src="https://media.thieunien.vn/thumb//uploads/2021/08/09/jisoo-blackpink-di-dong-phim-nhung-co-thanh-vien-nay-lai-duoc-khen-ve-dien-xuat-nhieu-hon_24560.jpg" alt="" />
                    </Link>
                ) : (
                    <ul>
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
                    </ul>
                )}
                <li className="top__right-item top__search-icon"><i class="fas fa-search"></i></li>
            </div>   
            </div>
    )
}
