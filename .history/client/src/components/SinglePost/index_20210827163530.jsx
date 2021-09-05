import React, { useEffect, useState, useContext } from 'react'

import { Context } from '../../context/Context'
import '../SinglePost/singlepost.css'
import { useLocation } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function SinglePost() {
    const PF = "http://localhost:5000/images/"

    const location = useLocation()
    const path = (location.pathname.split("/")[2])
    const [post, setPost] = useState({})
    const { user } = useContext(Context);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState("")


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)

            console.log(res)
        };
        getPost()
    }, [path])
    
    const handleDelete = async (e) => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username},
            })
            window.location.replace("/")
        } catch (err) { }
    }

    return (
        <div className="singlePost">
            <div className="singlePost__Wrapper">               
                <h1 className="singlePost__title">
                    {title}
                    {post.username === user?.username
                        && (
                            <div className="singlePost__edit">
                                    <i className="singlePost__icon fas fa-edit" onClick={ () => setUpdateMode(true)}></i>
                                    <i className="singlePost__icon fas fa-trash" onClick= { handleDelete }></i>
                            </div>
                    )}
                </h1>
            </div>
            {post.photo && (
                <img
                    className="singlePost__images"
                    src={PF + post.photo}
                    alt=""
                />
            )} {
                updateMode ? <input type="text" value={title} className="singlePost__title-input" onChange={(e) => setTitle(e.target.value)} /> : (
                    <h1 className="singlePost__title">
                    {post.title}
                    {post.username === user?.username
                        && (
                            <div className="singlePost__edit">
                                    <i className="singlePost__icon fas fa-edit" onClick={ () => setUpdateMode(true)}></i>
                                    <i className="singlePost__icon fas fa-trash" onClick= { handleDelete }></i>
                            </div>
                    )}
                </h1>  
                )   
            }
            <div className="singlePost__info">
                <span className="singlePost__Author">
                    Nguoi viet:
                    <Link to={`/?user=${post.username}`} className="link">
                        <b>{post.username}</b>
                    </Link>
                </span>
                <span className="singlePost__date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? (
                <textarea className="singlePost__description-input" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            ) : (    
            <p className="singlePost__description">{post.desc}</p>
            )}
        <button></button>
        </div>
    ) 
}
