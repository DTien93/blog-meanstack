import React from 'react'

import Post from '../Post'

import "../Posts/posts.css"

export default function Posts () {
    return (
        <div className="posts">
            <Post />
            <Post />
            <Post />
        </div>
    )
}
