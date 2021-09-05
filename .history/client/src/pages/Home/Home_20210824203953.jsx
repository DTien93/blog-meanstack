import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Header from '../../components/Header'
import Posts from '../../components/Posts'
import SideBar from '../../components/SideBar'

import './home.css'
import { useLocation } from 'react-router-dom'

export default function Home() {
    const [posts, setPosts] = useState([])
    const location = useLocation()

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/posts")
            setPosts(res.data)
            console.log(res.data)
        }
        fetchPost()
    }, [])
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <SideBar/>
            </div>
        </>
    )
}
