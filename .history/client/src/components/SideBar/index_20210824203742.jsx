import React, { useEffect, useState } from 'react'

import axios from 'axios'

import '../SideBar/sidebar.css'

export default function SideBar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCars = async () =>
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCars()
    }, [])
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
                    {
                        carts.map((item) => (
                            <li className="sidebar-item"></li>
                        ))}
                   
                </ul>
            </div>
        </div>
    )
}
