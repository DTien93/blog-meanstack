import React from 'react'

import '../TopBar/topbar.css'

export default function TopBar() {
    return (
        <div className="top">
            <div className="top__left">
                <li>HOME</li>
                <li>BLOG</li>
            </div>
            <div className="top__right">
                Right
            </div>
       </div>
    )
}
