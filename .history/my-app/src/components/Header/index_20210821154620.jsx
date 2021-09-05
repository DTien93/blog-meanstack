import React from 'react'

import Banner1 from '../../assets/img/header.jpg'


export default function Header() {
    return (
        <div className="header">
            <div className="header__titles">
                <span className="header__titles-heading">KIRA</span>
                <span className="header__titles-heading">Blog</span>
            </div>
            <img className="header__img" src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" att="banner" />
            
        </div>
    )
}

