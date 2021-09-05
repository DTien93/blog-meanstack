import React from 'react'

import Header from '../Header'


import '../pages/home.css'

export default function Home() {
    return (
        <div className="home">
            <Header />
            <div className="home">
                <Posts />
                <SideBar/>
            </div>
        </div>
    )
}
