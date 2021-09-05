import React from 'react'

import '../Post/post.css'

export default function Post({post}) {
    return (
        <div className="post">
                {post.photo && }
            <div className="post__image-info">
                <span className="post__title">
                { post.title }
                </span>
                <img className={post.photo}  />
                <div className="post__cats">
                    <span className="post__cat">Life</span>
                </div>
                <span className="post__Date">1 hours ago</span>
            </div>
            <p className="post__description">
                {post.desc}
            </p>
            <button className="post__btn">Read more</button>
        </div>
    )
}
