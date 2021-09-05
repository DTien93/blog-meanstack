import React, { useState } from 'react'
import '../SideBar/sidebar.css'

export default function SideBar() {
    const [cat, setCats] = useState([]);
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <span className="sidebar__item-title">About me</span>
                <img className="sidebar__image" src="https://thehanoichamomile.files.wordpress.com/2020/06/dbf23fb3-dba1-49ef-a02b-0fa95237ae41.jpg" alt="" />
                <p className="sidebar__bar-description">
                Hi. Mình là Nam Anh. Chào mừng bạn đến với blog của mình. Đây là nơi mình thường xuyên chia sẻ về những câu chuyện nho nhỏ trong đời sống thường ngày của mình. Mình tin rằng, hạnh phúc đến từ những điều giản dị nhất. Hi vọng bạn sẽ tìm thấy được sự bình yên và một chút niềm vui khi đọc blog của mình.
                </p>
            </div>
            <div className="sidebar__item">
                <span className="sidebar__item-categories">CATEGORIES</span>
                <ul className="sidebar__list">
                    <li className="sidebar-item">Life</li>
                    <li className="sidebar-item">Music</li>
                    <li className="sidebar-item">Sport</li>
                    <li className="sidebar-item">Game</li>
                    <li className="sidebar-item">Child</li>
                </ul>
            </div>
        </div>
    )
}
