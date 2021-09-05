import React from 'react'

import { Link, Route, BrowserRouter } from 'react-router-dom'

// css
import '../Header/header.css'

export default function Header() {
    return (
        <BrowserRouter>
        <div className="header">
            <div className="header__titles">
                <h1 className="header__titles-heading">
                    <Link to="">Kira</Link>
                </h1>
                    <p className="header__titles-description">The Hanoi Chamomile</p>
                    <div className="header__titles-container">
                    <li className="top__right-item"><i className="fab fa-facebook-square"></i></li>               
                    <li className="top__right-item"><i className="fab fa-instagram"></i></li>
                    <li className="top__right-item"><i className="fab fa-youtube"></i></li>
                    </div>
            </div>
            </div>
            </BrowserRouter>
    )
}

