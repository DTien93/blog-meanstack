import React, { useEffect, useState } from 'react'

import '../SinglePost/singlepost.css'
import { useLocation } from 'react-router'
import axios from 'axios'

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
                    Nguoi viet: <b>{post.username}</b>
                </span>
                <span className="singlePost__date">{new Date(post.createAt)}</span>
            </div>
            <p className="singlePost__description">
                Chưa bao giờ có tuần nào mà mình lại năng suất như tuần này. Trong 7 ngày, mình đã làm xong 4 video, 2 cái đã được đăng trong tuần, 2 cái còn lại thì được hẹn lịch đăng vào thứ 4 và thứ 7 tuần sau.
                Nhưng năng suất không hoàn toàn đồng nghĩa với việc mọi thứ đều hoàn hảo. Trong quá trình làm content, mình vẫn gặp phải những khó khăn nhất định, điều này khiến mình đôi lúc phải phá luật trong nhịp sống sinh hoạt. Siêu năng suất, nhưng cũng “ngốn” nhiều năng lượng.
                Chủ Nhật mình thường có thói quen ôn tập tuần (Weekly Reflection), vì vậy mình viết bài viết này, vừa để giúp bản thân có dịp được nhìn lại tuần vừa rồi một cách “kĩ càng”, vừa để chia sẻ với các bạn cái nhịp làm việc của một content creator nó như thế nào.
            </p>
        </div>
    ) 
}
