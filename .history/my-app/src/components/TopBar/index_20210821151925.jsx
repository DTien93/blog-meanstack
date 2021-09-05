import React from 'react'

import '../TopBar/topbar.css'

import { Link } from 'react-router-dom'

export default function TopBar() {
    return (
    
        <div className="top">
            <div className="top__left">
                <li className="top__left-item  item-active">HOME</li>
                <li className="top__left-item">BLOG</li>
                <li className="top__left-item">YOUTUBE</li>
                <li className="top__left-item">ỦNG HỘ</li>
                <li className="top__left-item">ABOUT ME</li>
            </div>

            <div className="top__right">
                <img className="topImg" src="https://media.thieunien.vn/thumb//uploads/2021/08/09/jisoo-blackpink-di-dong-phim-nhung-co-thanh-vien-nay-lai-duoc-khen-ve-dien-xuat-nhieu-hon_24560.jpg" alt="" />
                <li className=""><i class="fas fa-search"></i></li>
                <li className="top__right-item"><i className="fab fa-facebook-square"></i></li>               
                <li className="top__right-item"><i className="fab fa-instagram"></i></li>
                <li className="top__right-item"><i className="fab fa-youtube"></i></li>
            </div>   
            </div>
    )
}
