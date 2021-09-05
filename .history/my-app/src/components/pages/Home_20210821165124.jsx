import React from 'react'

import Header from '../Header'
import Posts from '../Posts'
import SideBar from '../SideBar'

import '../pages/home.css'

export default function Home() {
    return (
        <div className="home">
            <Header />
           
                <Posts />
                <SideBar/>
            </div>
        </div>
    )
}
