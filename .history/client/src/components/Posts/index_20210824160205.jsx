import React from 'react'

import Post from '../Post'

import "../Posts/posts.css"

export default function Posts ({posts}) {
    return (
        <div className="posts">
            {
                posts.map((item, index) => (
                    <Post post ={post}/>
                ))}
        </div>
    )
}
