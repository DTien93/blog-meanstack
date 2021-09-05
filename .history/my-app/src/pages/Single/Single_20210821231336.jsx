import React from 'react'

import '../Single/single.css'
import Sidebar from '../../components/SideBar'
import SinglePost from '../../components/SinglePost'

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
