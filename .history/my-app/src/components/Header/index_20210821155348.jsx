import React from 'react'

// css
import '../Header/header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header__titles">
                <span className="header__titles-heading">KIRA</span>
                <span className="header__titles-heading">Blog</span>
            </div>
            <img class="header__image" src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>
    )
}

