import React from 'react'
import '../SideBar/sidebar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <span className="sidebar__item-title">
                    About me
                </span>
                <img src="https://thehanoichamomile.files.wordpress.com/2020/06/dbf23fb3-dba1-49ef-a02b-0fa95237ae41.jpg" alt="" />
                <p>
                    Lorem ipsum dolor
                </p>
            </div>
        </div>
    )
}
