import React from 'react'

import '../TopBar/topbar.css'

import { Link, Route } from 'react-router-dom'

export default function TopBar() {
    return (
    
        <div className="top">
            <div className="top__left">
                <li className="top__left-item">HOME</li>
                <li className="top__left-item">BLOG</li>
                <li className="top__left-item">YOUTUBE</li>
                <li className="top__left-item">ỦNG HỘ</li>
                <li className="top__left-item">ABOUT ME</li>
                <li className="top__left-item">日本語</li>
            </div>
            <div className="top__right">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-youtube"></i>
            </div>
                
            </div>
    )
}
