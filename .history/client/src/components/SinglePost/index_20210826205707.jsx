import React, { useEffect, useState } from 'react'

import '../SinglePost/singlepost.css'
import { useLocation } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function SinglePost() {
    const location = useLocation()
    const path = (location.pathname.split("/")[2])
    const [post, setPost] = useState({})
    console.log(location.pathname.split("/")[2]);   

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            console.log(res)
        };
        getPost()
    }, [path])   
    return (
        <div className="singlePost">
            <div className="singlePost__Wrapper">
               
                <h1 className="singlePost__title">{post.title}</h1>
            </div>
            {post.photo && (
                <img
                    className="singlePost__images"
                    src={post.photo}
                    alt=""
                />
            )}
            <div className="singlePost__edit">
                <i className="singlePost__icon fas fa-edit"></i>
                <i className="singlePost__icon fas fa-trash"></i>
            </div>
            <div className="singlePost__info">
                <span className="singlePost__Author">
                    Nguoi viet:
                    <Link to={`/?user=${post.username}`} className="link">
                        <b>{post.username}</b>
                    </Link>
                </span>
                <span className="singlePost__date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePost__description">
                    {post.desc}
            </p>
        </div>
    ) 
}
