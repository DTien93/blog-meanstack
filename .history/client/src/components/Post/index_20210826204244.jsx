import React from 'react'

import '../Post/post.css'

import { Link} from 'react-router-dom'

export default function Post({ post }) {
    const PF = "http://localhost:5000/images/"

    return (
        <div className="post">
            {post.photo && <img src={PF +  post.photo} alt=""/> }
            <div className="post__image-info">
            <Link to={`/post/${post._id}`}>
                <span className="post__title">
                { post.title }
                </span>
             </Link>
                <div className="post__cats">
                    {
                        post.categories.map((category) => (
                            <span className="post_cart">{category.name}</span>
                        ))}      
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
