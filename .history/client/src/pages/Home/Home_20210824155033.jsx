import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Header from '../../components/Header'
import Posts from '../../components/Posts'
import SideBar from '../../components/SideBar'

import './home.css'

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res =  await axios.get("/posts")
        } 
    })
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar/>
            </div>
        </>
    )
}
