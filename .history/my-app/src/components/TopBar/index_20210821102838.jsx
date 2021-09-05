import React from 'react'

import '../TopBar/topbar.css'

import { Link, Route } from 'react-router-dom'

export default function TopBar() {
    return (
    
        <div className="top">
            <div className="top__left">
                <li>HOME</li>
                
            </div>
            <div className="top__right">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
            </div>
                
            </div>
    )
}
